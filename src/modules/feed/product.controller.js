const Product = require("./product.schema");
const { uploadToCSV } = require("./utils/uploadToCSV");

async function createNewProduct(req, res) {
    await Product({
        id: req.body.id,
        productName: req.body.productName,
        brandId: req.body.brandId,
        categoryName: req.body.categoryName,
        subCategoryName: req.body.subCategoryName,
        tagsArray: req.body.tagsArray,
        featureObject: req.body.featureObject,
        productImage: req.body.productImage,
        productDescription: req.body.productDescription,
        numberOfStocks: req.body.numberOfStocks,
        countriesDeliveredTo: req.body.countriesDeliveredTo,
        daysForDelivery: req.body.daysForDelivery,
        onSale: req.body.onSale,
        originCountry: req.body.originCountry,
        brand: req.body.brand,
        price: req.body.price,
        discountedPrice: req.body.discountedPrice,
        reviews: req.body.reviews,
        ratings: req.body.ratings,
    })
        .save()
        .then((data) => {
            res.status(201);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function getAllProducts(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const productArray = await Product.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
    res.send(productArray);
}

async function bulkInsertProducts(req, res) {
    // uploadToCSV(req.body.csvString);
    await Product({ id: req.body.id, productData: req.body.productData })
        .save()
        .then((items) => {
            res.status(201).send("Successfully inserted");
            console.log("inserted");
        })
        .catch((err) => {
            res.status(400).send(err);
            console.log(err);
        });
}

async function searchProductById(req, res) {
    const foundProduct = await Product.findById({
        id: req.body.id,
    });
    res.send(foundProduct);
}

async function searchProductByName(req, res) {
    const foundProduct = await Product.find({
        productName: req.body.productName,
    });
    res.send(foundProduct);
}

async function updateProductById(req, res) {
    try {
        const { id: productId } = req.params;
        const updatedProduct = await Product.findOneAndUpdate(
            { productId },
            req.body,
            { new: true }
        );
        res.status(201).send(updatedProduct);

        // io.emit("productUpdated", { productId });
    } catch (e) {
        return res.status(400).send({
            productId,
            error: `Invalid product ID (${e?.message}).`,
        });
    }
}

async function deleteProductById(req, res) {
    await Product.findOneAndDelete({ id: req.body.id }, (data) => {
        res.status(200).send(data);
    });
}

module.exports = {
    createNewProduct,
    bulkInsertProducts,
    getAllProducts,
    searchProductById,
    searchProductByName,
    updateProductById,
    deleteProductById,
};
