const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Eventschema = new Schema(
    {
        // _id:{type:mongoose.Schema.Types.ObjectId,},
        eventsUniqueId:{
            type:String
        },
        backgroundImagePath:{
            type:String
        },
        companyLogo:{
            type:String
        },
        taskName:{
            type:String
        },
        date:{
            type:String
        }, 
        time:{
            type:String
        },
        companyName:{
            type:String
        },
        details:{
            type:String
        },
        location:{
            type:String
        },
        topic:{
            type:String
        },
        charges:{
            type:String
        },
        eventdt:{
            type:String
        },
      
    },
    {
        timestamps: true,
    }

)

// module.exports = mongoose.model('User', userSchema);
// module.exports = Product;

const Events = mongoose.model("Event", Eventschema);
module.exports = Events;