const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        // _id:{type:mongoose.Schema.Types.ObjectId,},
        topicImage:{
            type:String
        },
        topicCoverImage:{
            type:String
        },
        topicName:{
            type:String
        },
        topicContent:{
            type:String
        },
        noOfMembers:{
            type:String
        }
    },
    {
        timestamps: true,
    }

)

// module.exports = mongoose.model('User', userSchema);
// module.exports = Product;

const Topic = mongoose.model("Topic", UserSchema);
module.exports = Topic;