const Chat = require('./chat.schema');

async function chatCreate(req, res) {

    await Chat({ 
        senderId: req.body.senderid,
        receiverId: req.body.receiverid,     
        senderName: req.body.sendername,
        receiverName: req.body.receivername,
        message: req.body.message,
    })
        .save()
        .then((data) => {
            res.status(201).send({status:"inserted"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function chatalldata(req, res) {

     await Chat.find()
    .exec()
    .then(chat => {
        if (chat.length < 1) {
            return res.status(404).send({
                
                msg: "chat not exist"
            })
        }else{
            res.status(201).send(
                {
                    "status":"201",
                    "data":chat
                   
                //        "data":[{
                //        //logoUrl:reward[0].logoUrl,

                //        logoUrl:reward[0].logoUrl,
                //        companyName:reward[0].companyName,
                //        tokenUrl:reward[0].tokenUrl,
                //        rewardValue:reward[0].rewardValue,
                //        termsAndConditions:reward[0].termsAndConditions,
                //        details:reward[0].details,
                //        aboutTheCompany:reward[0].aboutTheCompany,
                //  } ]
                }
                );
        }
    })

    //rewardsData[0]['logoUrl']
   
}


module.exports = {
    chatCreate,
    chatalldata
};