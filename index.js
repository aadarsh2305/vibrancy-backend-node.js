const express = require("express");
const db = require("./src/utils/connection");
const cors = require("cors");
let port = process.env.PORT || 8000;
const uuid = require("uuid");
const { productRoutes } = require("./src/modules/feed/product.routes");

const app = express();
app.use(cors());
app.use(express.json());
const http = require("http").Server(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

mongoose = require("mongoose");
cron = require("node-cron");

io.on("connection", function (socket) {
    console.log("A user connected");
    socket.on("greeting", (message) => console.log("Received: " + message));
    //Whenever someone disconnects this piece of code executed
    socket.on("disconnect", function () {
        console.log("A user disconnected");
    });
});

http.listen(port, function () {
    console.log(`listening on *:${port}`);
});

db.establishConnection();
app.get("/", (req, res) => res.send("Welcome to Desi covers backend APIs"));

// categoryRoutes(app);
// featureRoutes(app);
// productRoutes(app);
productRoutes(app);
// subCategoryRoutes(app);

app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(r.route.path);
    }
});

// /create-new-product
// /get-all-products
// /search-product-by-id
// /search-product-by-name
// /update-product-by-id
// /delete-product-by-id
