//Inicializa o Express
const express = require('express');

//Instanciar o App
const app = express();

//Definir PORTA
const PORT = 3000;

//Criar função de "Middleware" da requisição GET
function middleware(req, res) {
    res.send("Olá Mundo!");
}

//Criar rota simples de GET (HTTP GET)
app.get('/', middleware);

//Iniciar o servidor
app.listen(PORT, () => {
    console.log("Servidor foi iniciado na porta: ", PORT);
})