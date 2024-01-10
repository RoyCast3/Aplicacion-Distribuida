const express = require("express");
const path = require("path");

const archivosRouter = require('./routes/archivosRoutes');


const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, "public")));


app.use('/archivos', archivosRouter);

app.listen(PORT, () => {
    console.log(`Servidor web emulado en http://localhost:${PORT}`);
});

module.exports = app;