import { useRef, useState } from "react";

export default function FileUpload({
  file,
  setFile,
}) {

  
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef(null);

  function handleSelect(e) {

  const selectedFile = e.target.files[0];

  handleFile(selectedFile);

}

  
  function handleFile(selectedFile) {

  if (!selectedFile) return;

  if (selectedFile.type !== "application/pdf") {

    alert("Please upload a PDF file.");

    return;

  }

  setFile(selectedFile);

}

  function removeFile() {

    setFile(null);

    inputRef.current.value = "";

  }

  function handleDragOver(e) {

  e.preventDefault();

  setDragging(true);

}

function handleDragLeave() {

  setDragging(false);

}

function handleDrop(e) {

  e.preventDefault();

  setDragging(false);

  const droppedFile = e.dataTransfer.files[0];

  handleFile(droppedFile);

}

  return (

    <div
  className={`upload-box ${dragging ? "dragging" : ""}`}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
>

      {!file ? (

        <>

          <div className="upload-icon">
            📄
          </div>

          <h2>Upload your study material</h2>

          <p>
            Drag & drop a PDF or click below to browse.
          </p>

          <input
            type="file"
            accept=".pdf"
            ref={inputRef}
            onChange={handleSelect}
            hidden
          />

          <button
            className="upload-btn"
            onClick={() => inputRef.current.click()}
          >
            Choose PDF
          </button>

        </>

      ) : (

        <div className="file-card">

          <div>

            <h3>📄 {file.name}</h3>

            <p>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

          </div>

          <button
            className="remove-btn"
            onClick={removeFile}
          >
            Remove
          </button>

        </div>

      )}

    </div>

  );

}