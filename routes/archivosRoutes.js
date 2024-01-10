//En este documento se pueden encontrar todos los endpoints a los ciuales el cliente va a poder acceder.

//Requerimos los modulos necesarios para este documento
const express = require('express');
const archivosController = require('../controllers/archivosController');

//Creamos el Router en express
const router = express.Router();

//Endpoint para subir archivos en un POST
router.post("/upload", archivosController.uploadFile, archivosController.confirmacion);

//Endpoint para obtener la lista de archivos que se encuentran en la carpeta uploads
router.get("/files", archivosController.getFiles);

///Endpoint para descargar archivos especificos.
router.get("/download/:filename", archivosController.downloadFile);

module.exports = router;