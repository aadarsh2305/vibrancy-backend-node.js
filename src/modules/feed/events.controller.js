const Events = require('./events.schema');

async function eventPostCreate(backgroundImagePath,companyLogo,req, res) {
    console.log(backgroundImagePath);
    console.log(companyLogo);

    var serverurl = "http://192.168.29.160:8000/";

    var imagurl = serverurl + backgroundImagePath;
    var imagurl1 = serverurl + companyLogo;
    var eventsUniqueId = Math.floor(Math.random() * 55555);
    var eventdt = [{
        "day":"monday",
        "startTime":"10am",
        "endTime":"10pm" 
    }]

    await Events({   
        eventsUniqueId:         eventsUniqueId,
        backgroundImagePath:    imagurl,
        companyLogo:            imagurl1,
        taskName:               req.body.taskName,
        date:                   req.body.date,
        time:                   req.body.time,
        companyName:            req.body.companyName,
        details:                req.body.details,
        location:               req.body.location,
        topic:                  req.body.topic,
        charges:                req.body.charges,
        schedule:                eventdt,
    })
        .save()
        .then((data) => {
            res.status(201).send({status:"inserted"});
        })
        .catch((err) => {
            res.status(400).send(err);
        });

        // res.status(201).send({
    //     "eventsUniqueId":eventsUniqueId
    // });
}

async function eventPostalldata(req, res) {

     await Events.find()
    .exec()
    .then(events => {
        if (events.length < 1) {
            return res.status(404).send({
                
                msg: "events not exist"
            })
        }else{
            res.status(201).send(
                {
                    "status":"201",
                    "events":events
                   
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
    eventPostCreate,
    eventPostalldata
};