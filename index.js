const express = require("express");

const db = require("./src/utils/connection");
const cors = require("cors");
let port = process.env.PORT || 8000;
const uuid = require("uuid");
const { productRoutes } = require("./src/modules/feed/product.routes");
const { userRoutes } = require("./src/modules/feed/user.routes");
const { rewardsRoutes } = require("./src/modules/feed/rewards.routes");
const { socialRoutes } = require("./src/modules/feed/social.routes");
const { topicsRoutes } = require("./src/modules/feed/topics.routes");
const { chatRoutes } = require("./src/modules/feed/chat.routes");
const { eventsRoutes } = require("./src/modules/feed/events.routes");



const app = express();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
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


productRoutes(app);
userRoutes(app);
rewardsRoutes(app);
socialRoutes(app);
topicsRoutes(app);
chatRoutes(app);
eventsRoutes(app);
app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(r.route.path);
    }
});

