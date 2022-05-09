const {
    createNewUser,
    getAlluser,
    // searchUserByName,
    // updateUsertById,
    // updateUsertBypost,
    // deleteUserById,
    // signupUser,
    // loginUser
} = require('./user.controller');

function userRoutes(app) {

    app.post("/create-new-user", (req, res) => {
        // const name          = req.body.name
        // const userNumber    = req.body.number
        // const userEmail      = req.body.email

       // console.log(req.body);
        createNewUser(req, res);

        // res.status(200).send({ 
        //     msg: "user post request 1"
        // })
    });

    app.get("/get-all-user", (req, res) => {
        getAlluser(req, res);
        // res.status(201).send({
        //     msg: "user get request"
        // })
    });

//     app.post("/search-user-by-name", (req, res) => {
//         searchUserByName(req, res);
//     });

//     app.put("/update-user-by-id/:id", (req, res) => {
//         updateUsertById(req, res);
//         // res.status(201).send({
//         //     msg: "user update request"
//         // })
//     });

//     app.post("/update-user-by-post", (req, res) => {
//         updateUsertBypost(req, res);
//         // res.status(201).send({
//         //     msg: "user update request"
//         // })
//     });

//     app.post("/delete-user-by-id", (req, res) => {
//          deleteUserById(req, res);
//     });

//     app.post("/signup-user", (req, res) => {
//         signupUser(req, res);
//    });

//    app.post("/login-user", (req, res) => {
//        loginUser(req, res);

//     //    res.status(201).send({
//     //         msg: "user login request"
//     //     })
//    });
   
}

module.exports = {
    userRoutes,
    //studentRoutes
};