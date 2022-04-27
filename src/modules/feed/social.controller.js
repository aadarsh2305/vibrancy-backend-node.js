const Social = require('./social.schema');

async function socialPostCreate(profileImage,postImage,req, res) {
    //console.log(profileImage);
    //console.log(postImage);

    var serverurl = "localhost:8000/";
    var imagurl = serverurl + profileImage;

    var imagurl1 = serverurl + postImage;

    await Social({
       
        creatorName: req.body.creatorName,
        creatorProfileImageUrl: imagurl,
        contentImagesUrl: imagurl1,
        noOfLikes: req.body.noOfLikes,
        trends:req.body.trends,
     
    })
        .save()
        .then((data) => {
            res.status(201).send({status:"inserted"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function socialPostalldata(req, res) {

     await Social.find()
    .exec()
    .then(social => {
        if (social.length < 1) {
            return res.status(404).send({
                
                msg: "social not exist"
            })
        }else{
            res.status(201).send(
                {
                    "status":"201",
                    "data":social
                   
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
    socialPostCreate,
    socialPostalldata
};