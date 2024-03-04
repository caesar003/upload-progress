const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // Import the cors middleware

const app = express();
const PORT = 3001;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Enable CORS
app.use(cors());

// Serve the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Define the file upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File uploaded successfully!");
  res.status(200).send("File uploaded successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
