from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PyPDF2 import PdfReader
import shutil
import os

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

    return {
        "reply": f"I found your PDF. You asked: {data.message}"
    }


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