import { useRef, useState } from "react";

export default function FileUpload() {

  const [file, setFile] = useState(null);

  const inputRef = useRef(null);

  function handleSelect(e) {

    if (e.target.files.length > 0) {

      setFile(e.target.files[0]);

    }

  }

  function removeFile() {

    setFile(null);

    inputRef.current.value = "";

  }

  return (

    <div className="upload-box">

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