const Topic = require('./topics.schema');

async function topicsPostCreate(topicImage,topicCoverImage,req, res) {
    //console.log(profileImage);
    //console.log(postImage);

    var serverurl = "localhost:8000/";
    var imagurl = serverurl + topicImage;

    var imagurl1 = serverurl + topicCoverImage;

    await Topic({
       
        topicImage: imagurl,
        topicCoverImage: imagurl1,
        topicName: req.body.topicname,
        topicContent: req.body.topiccontent,
        noOfMembers: req.body.noofmembers,
    
     
    })
        .save()
        .then((data) => {
            res.status(201).send({status:"inserted"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function topicsPostalldata(req, res) {

     await Topic.find()
    .exec()
    .then(topic => {
        if (topic.length < 1) {
            return res.status(404).send({
                
                msg: "topic not exist"
            })
        }else{
            res.status(201).send(
                {
                    "status":"201",
                    "data":topic
                   
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
    topicsPostCreate,
    topicsPostalldata
};