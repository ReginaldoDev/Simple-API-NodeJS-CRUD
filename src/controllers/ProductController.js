const mongoose = require("mongoose"); // Instance mongoose for connection mongoDB

const Product = mongoose.model("Product"); // Instance Model

// Init exports module
module.exports = {

    // Function linsting async with require and responde in Product
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10});

        return res.json(products);
    },

    // Function linsting unique Product async with require and responde
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Function create new Product async with require and responde
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Function update the Product async with require and responde
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    //Function delete the Product async with required and responde, return status code
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};