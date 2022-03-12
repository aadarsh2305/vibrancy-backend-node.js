const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        // productData: {
        //     type: Object,
        // },

        profileImageUrl: {
            type:String,
            unique: true,
        },
        name: {
            type:String,
        },          
        lastSeenValue: {
            type:Number,
        },
        lastSeenUnit:  {
            type:String,
        },
        feedTitle:     {
            type:String,
        },
        feedContent:   {
            type:String,
        },
        hashTag:       {
            type:String,
        },
        noOfLikes:     {
            type:Number,
        },
        noOfComments:  {
            type:Number,
        },
    },
    // {
    //     timestamps: true,
    // }
);
const Product = mongoose.model("feed", ProductSchema);
module.exports = Product;
