const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {
        id: {
            type: String,
            unique: true,
        },
        productData: {
            type: Object,
        },
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
