const {
    createNewProduct,
    bulkInsertProducts,
    getAllfeeds,
    searchProductById,
    searchProductByName,
    updateProductById,
    deleteProductById,
} = require("./product.controller");
function productRoutes(app) {
    app.post("/create-new-product", (req, res) => {
        createNewProduct(req, res);
    });
    app.post("/bulk-insert-products", (req, res) => {
        bulkInsertProducts(req, res);
    });
    app.get("/get-all-feeds", (req, res) => {
        getAllfeeds(req, res);
    });
    app.post("/search-product-by-id", (req, res) => {
        searchProductById(req, res);
    });

    app.post("/search-product-by-name", (req, res) => {
        searchProductByName(req, res);
    });

    app.post("/update-product-by-id", (req, res) => {
        updateProductById(req, res);
    });
    app.post("/delete-product-by-id", (req, res) => {
        deleteProductById(req, res);
    });
}

module.exports = {
    productRoutes,
};
