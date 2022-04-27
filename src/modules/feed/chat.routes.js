const {
    chatCreate,
    chatalldata

} = require('./chat.controller');


function chatRoutes(app) {

    app.post("/chat-create", (req, res) => {
        chatCreate(req, res);
    });


    app.post("/chat-all-data", (req, res) => {

        chatalldata(req, res);
    });

}

module.exports = {
    chatRoutes,
};