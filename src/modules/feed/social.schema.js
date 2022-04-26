const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        // _id:{type:mongoose.Schema.Types.ObjectId,},
        creatorName:{
            type:String
        },
        creatorProfileImageUrl:{
            type:String
        },
        contentImagesUrl:{
            type:String
        },
        noOfLikes:{
            type:String
        }, 
        trends:{
            type:String
        },
      
    },
    {
        timestamps: true,
    }

)

// module.exports = mongoose.model('User', userSchema);
// module.exports = Product;

const Social = mongoose.model("Social", UserSchema);
module.exports = Social;