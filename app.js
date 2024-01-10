

//Requerimos los modulos npm que utlizaremos en este documento
const express = require("express");
const path = require("path");
//Tambien hacemos el requerimiento de los modulos creados por nosotros mismos
const archivosRouter = require('./routes/archivosRoutes');


//
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

//Agregamos los endpoints a los que el usuario va a poder acceder
app.use('/archivos', archivosRouter);

//La app inicia a recibir solicitudes mediante el listen
app.listen(PORT, () => {
    console.log(`Servidor web emulado en http://localhost:${PORT}`);
});

module.exports = app;