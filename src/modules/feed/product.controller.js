const Product = require("./product.schema");
const { uploadToCSV } = require("./utils/uploadToCSV");

async function createNewProduct(req, res) {
    await Product({
        id:                 req.body.id,
        profileImageUrl:    req.body.profileImageUrl,
        name:               req.body.name,
        lastSeenValue:      req.body.lastSeenValue,
        lastSeenUnit:       req.body.lastSeenUnit,
        feedTitle:          req.body.feedTitle,
        feedContent:        req.body.feedContent,
        hashTag:            req.body.hashTag,
        noOfLikes:          req.body.noOfLikes,
        noOfComments:       req.body.noOfComments,
    })
        .save()
        .then((data) => {
            res.status(201);           
            console.log("status: okk");
        })
        .catch((err) => {
            res.status(400).send(err);
            console.log(err);
        });
}

async function getAllfeeds(req, res) {
   // const { page = 1, limit = 10 } = req.query;
    const productArray = await Product.find();
        // .limit(limit * 1)
        // .skip((page - 1) * limit);
   /// res.send("status","okk");

   res.status(201).send(
       {
       "syncs": productArray,
       // "status": `okk`,
       }
   );
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
    // bulkInsertProducts,
    getAllfeeds,
    // searchProductById,
    // searchProductByName,
    // updateProductById,
    // deleteProductById,
};
