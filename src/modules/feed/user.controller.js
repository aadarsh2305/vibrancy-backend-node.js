const User = require('./user.schema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

async function createNewUser(req, res) {

    // const name = req.body.name
    // const userEmail = req.body.email
    // const userNumber = req.body.number
    // const usergender = req.body.gender
    // console.log(name, userNumber, userEmail,usergender);
    await User({
        // id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        gender: req.body.gender,
    })
        .save()
        .then((data) => {
            res.status(201)
            .send(
                {
                    "status":201,
                    data:[{
                        "msg":"inserted"
                    }]
                }
            
                );
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function getAlluser(req, res) {
    // const { page = 1, limit = 3 } = req.query;
    const userstArray = await User.find();
    //     .limit(limit * 1)
    //     .skip((page - 1) * limit);
    res.send
        (
            {
                "status": "200",
                data: userstArray
            }
        );
}



// async function searchUserByName(req, res) {
//     const foundUser = await User.find({
//         name: req.body.name,
//     });
//     if (foundUser == 0) {
//         res.send("no data");
//     } else {

//         res.send(foundUser);
//     }
// }

// async function updateUsertById(req, res) {

//     try {
//         //const { _id: uuid } = req.params;
//         const uuid = req.params.id;
//         console.log(uuid);
//         const updatedUser = await User.findOneAndUpdate(

//             { _id: uuid },
//             req.body,
//             { new: true }


//             //     { _id:uuid},
//             //     {        
//             //         $set: { name: req.body.name,
//             //         email: req.body.email,
//             //         phone: req.body.number,
//             //         gender: req.body.gender,}
//             // },
//             //     { new: true }
//         );
//         res.status(201).send(updatedUser);

//         // io.emit("productUpdated", { productId });
//     } catch (e) {
//         return res.status(400).send({
//             //id,
//             error: `Invalid User ID (${e?.message}).`,
//         });
//     }
// }

// async function updateUsertBypost(req, res) {

//     try {
//         //const { _id: uuid } = req.params;
//         const uuid = req.body.id;
//         console.log(uuid);
//         const updatedUserpost = await User.findOneAndUpdate(

//             { _id: uuid },
//             req.body,
//             { new: true }


//             //     { _id:uuid},
//             //     {        
//             //         $set: { name: req.body.name,
//             //         email: req.body.email,
//             //         phone: req.body.number,
//             //         gender: req.body.gender,}
//             // },
//             //     { new: true }
//         );
//         res.status(201).send(updatedUserpost);

//         // io.emit("productUpdated", { productId });
//     } catch (e) {
//         return res.status(400).send({
//             //id,
//             error: `Invalid User ID (${e?.message}).`,
//         });
//     }
// }

// async function deleteUserById(req, res) {
//     try {
//         const uudelete = await User.findOneAndDelete({ _id: req.body.id });
//         if (uudelete != null) {

//             res.status(201).send({ mgs: "done" });
//         } else {
//             res.status(201).send({ mgs: "try again" });
//         }

//     } catch (e) {
//         return res.status(400).send({
//             //id,
//             error: `Invalid User ID (${e?.message}).`,
//         });
//     }
// }




// async function signupUser(req, res) {
//     try {

//         // res.status(201).send({ mgs: "done1" });

//         await bcrypt.hash(req.body.password, 10, (err, hash) => {
//             if (err) {
//                 return res.status(500).send({
//                     error: err
//                 })
//             } else {
//                 User({
//                     // id: new mongoose.Types.ObjectId,
//                     name: req.body.name,
//                     email: req.body.email,
//                     password: hash,
//                     phone: req.body.number,
//                     gender: req.body.gender,
//                 })
//                     .save()
//                     .then((data) => {

//                         //  bcrypt.compare(req.body.password, hash, (err, result) =>{
//                         //     if(result == true){

//                         res.status(201).send({
//                             status: 201,

//                             data: [
//                                 {
//                                     name: req.body.name,
//                                     email: req.body.email,
//                                     password: hash,
//                                     phone: req.body.number,
//                                     gender: req.body.gender,
//                                 }
//                             ]

//                         });
//                         //   }else{
//                         //        res.status(404);
//                         //    }

//                         //  });




//                     })
//                     .catch((err) => {
//                         res.status(400).send(err);
//                     });

//             }
//         });

//     } catch (e) {
//         return res.status(400).send({
//             //id,
//             error: `Invalid User ID (${e?.message}).`,
//         });
//     }
// }


// async function loginUser(req, res) {
//     await User.find({ email: req.body.email })
//         .exec()
//         .then(user => {
//             if (user.length < 1) {
//                 return res.status(401).send({
//                     msg: "user not exist"
//                 })
//             }
//             bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//                 if (!result) {
//                     return res.status(404).send({
//                         mgs: "pwd not match"
//                     })
//                 }
//                 if (result) {
//                     const token = jwt.sign(
//                        { 
//                            name:user[0].name,
//                            email:user[0].email,
//                            phone:user[0].phone,
//                            gender:user[0].gender,
//                         },
//                         'key_user_token',
//                         {
//                             expiresIn:"24h"
//                         }

//                     );
//                     res.status(200).send({
//                         name:user[0].name,
//                         email:user[0].email,
//                         phone:user[0].phone,
//                         gender:user[0].gender,
//                         token:token
//                     })
//                 }
//             })
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 error: `Invalid User ID (${err?.message}).`,
//             })
//         })
//}
module.exports = {

    createNewUser,
    getAlluser,
    // searchUserByName,
    // updateUsertById,
    // updateUsertBypost,
    // deleteUserById,
    // signupUser,
    // loginUser
  

};
