const {
    createNewProduct,
    bulkInsertProducts,
    getAllsyncs,
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
    app.get("/get-all-syncs", (req, res) => {
        getAllsyncs(req, res);
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
