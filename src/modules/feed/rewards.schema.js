const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        // _id:{type:mongoose.Schema.Types.ObjectId,},
        logoUrl:{
            type:String
        },
        companyName:{
            type:String
        },
        tokenUrl:{
            type:String
        },
        rewardValue:{
            type:String
        }, 
        termsAndConditions:{
            type:String
        },
        details:{
            type:String
        },  
        aboutTheCompany:{
            type:String
        },       
    },
    {
        timestamps: true,
    }

)

// module.exports = mongoose.model('User', userSchema);
// module.exports = Product;

const Reward = mongoose.model("Reward", UserSchema);
module.exports = Reward;