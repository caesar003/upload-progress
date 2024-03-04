import React from "react";

function App() {
  const handleFileChange = (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3001/upload", true);

      // Track progress
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          console.log(`Upload Progress: ${percentComplete.toFixed(2)}%`);
        }
      });

      // Handle completion
      xhr.addEventListener("load", () => {
        console.log("Upload Complete!");
      });

      // Send the request
      xhr.send(formData);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default App;
