const express = require("express"); //Framework MVC
const routes = express.Router(); //Inicia sistema de rotas

const ProductController = require("./controllers/ProductController"); //Instancia Controller da Class Product

routes.get("/products", ProductController.index); // List products
routes.get("/products/:id", ProductController.show); // show unique product
routes.post("/products", ProductController.store); // create product
routes.put("/products/:id", ProductController.update); // update product
routes.delete("/products/:id", ProductController.destroy); // delete product

module.exports = routes; //exports routes for modules 