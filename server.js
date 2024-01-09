const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("Archivo recibido correctamente");
});

app.get("/files", (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, "uploads"));
  res.json(files);
});

app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  res.download(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al descargar el archivo");
    }
  });
});

app.listen(PORT, () => {
  console.log("Servidor web ejecutado en http://localhost:${PORT}");
});
