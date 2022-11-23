
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

// Ponemos a escuchar el servidor
app.listen(3033, () => {
    console.log("Servidor corriendo en http://localhost:3033")
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/home.html"))
})

