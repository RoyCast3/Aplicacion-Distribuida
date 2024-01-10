const express = require('express');

const archivosController = require('../controllers/archivosController');

const router = express.Router();

router.post("/upload", archivosController.uploadFile, archivosController.confirmacion);

router.get("/files", archivosController.getFiles);

router.get("/download/:filename", archivosController.downloadFile);

module.exports = router;