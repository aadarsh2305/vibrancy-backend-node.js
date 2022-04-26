const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        // _id:{type:mongoose.Schema.Types.ObjectId,},
        senderId:{
            type:String
        },
        receiverId:{
            type:String
        },
        senderName:{
            type:String
        },
        receiverName:{
            type:String
        },
        message:{
            type:String
        }
    },
    {
        timestamps: true,
    }

)

// module.exports = mongoose.model('User', userSchema);
// module.exports = Product;

const Chat = mongoose.model("Chat", UserSchema);
module.exports = Chat;