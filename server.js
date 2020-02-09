const express = require("express"); //Framework MVC
const cors = require('cors'); //Proteção de Rotas
const mongoose = require("mongoose"); // Conexão ao MongoDB
const requireDir = require("require-dir"); // Requisição de diretório 

// Iniciando o App
const app = express(); // Inicia o framework
app.use(express.json()); // Permite a utilização de requisição JSON
app.use(cors()); // Inicia a utilização do CORs

// Iniciando o DB
mongoose.connect("mongodb://localhost:27012/api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir("./src/models"); // Puxa os modelos

const Product = mongoose.model("Product"); // Instancia Modelo Produto

// Rotas
app.use("/api", require("./src/routes")); //Monda padrão de rota e requisita o arquivo de rotas

app.listen(3000); // Porta utilizada pelo Express