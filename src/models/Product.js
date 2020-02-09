const mongoose = require("mongoose"); // Instance connection mongodb
const mongoosePaginate = require("mongoose-paginate"); // Instance paginate for mongoose

// Create entity mongoDB
const ProductSchema = new mongoose.Schema({
    title: { // name collumn
        type: String, // type collumn
        required: true // NULL / NOT NULL
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate); // Init paginate for model

mongoose.model("Product", ProductSchema); // Create Schema