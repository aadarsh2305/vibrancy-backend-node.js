const Reward = require('./rewards.schema');

// const urlfiled = "upload.single('userprofileimg')";

async function rewardsCreate(fileData,req, res) {
    console.log(fileData);
    var serverurl = "localhost:8000/";
    var fileurld = serverurl + fileData;

    await Reward({
       
        logoUrl: fileurld,
        companyName: req.body.companyname,
        tokenUrl: req.body.tokenurl,
        rewardValue: req.body.rewardvalue,
        termsAndConditions:req.body.termsAndConditions,
        details:req.body.details,
        aboutTheCompany:req.body.aboutTheCompany
    })
        .save()
        .then((data) => {
            res.status(201).send({status:"inserted"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });

    //   console.log(req.file);
    //  res.send({"okk":"okk"});
   
}

async function getsrewards(req, res) {

     await Reward.find()
    .exec()
    .then(reward => {
        if (reward.length < 1) {
            return res.status(404).send({
                msg: "reward not exist"
            })
        }else{
            res.status(201).send(
                {
                    "status":"201",
                    "rewards":reward
                   
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
    rewardsCreate,
    getsrewards
};