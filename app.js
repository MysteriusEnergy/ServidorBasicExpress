const express = require("express"); // Usamos el modulo que vamos a requerir con el requiere
const path = require("path");

const app = express(); // Creamos el objeto de nuestra aplicacion 

app.get("/", (req, res)=>{ // Agregamos un middleware, que recibe una funcion y unos parametros, req(requerimiento), res(respuesta)
    res.sendFile(path.join(__dirname + "/index.html")); // Tomamos la ruta raiz de nuestro html, sin poner toda la ruta completa
});

app.listen(3000, () =>{ // Puerto del servidor, por donde nos escucha, y usamos el objeto de la variable que era app
    console.log("Server listening running on port",3000) // Mensaje para visualizar si el servidor está funcionando
});




