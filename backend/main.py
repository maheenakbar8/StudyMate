from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PyPDF2 import PdfReader
import shutil
import os
from google import genai
from dotenv import load_dotenv


load_dotenv()

print("API Key:", os.getenv("GEMINI_API_KEY"))


client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

document_text = ""

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "StudyMate Backend Running"
    }


class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
def chat(data: ChatRequest):

    if document_text == "":
        return {
            "reply": "Please upload a PDF first."
        }

    prompt = f"""
You are StudyMate AI.

Answer ONLY using the uploaded document.

If the answer is not present in the document,
say that the information isn't available.

Document:
{document_text}

Question:
{data.message}
"""

    response = client.models.generate_content(
    model="gemini-flash-latest",
    contents=prompt,
)


    return {
    "reply": response.text}
          

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    global document_text

    file_path = os.path.join(
        "uploads",
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    reader = PdfReader(file_path)

    document_text = ""

    for page in reader.pages:

        extracted = page.extract_text()

        if extracted:
            document_text += extracted + "\n"

    return {
        "filename": file.filename,
        "message": "PDF uploaded successfully!",
        "pages": len(reader.pages)
    }