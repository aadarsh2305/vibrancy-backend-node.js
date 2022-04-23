const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const con = await mongoose.connect(
            "mongodb+srv://vibrancy:vibrancy@vibrancy.g36op.mongodb.net/vibrancy?retryWrites=true&w=majority",
           //"mongodb+srv://vibrancy:vibrancy@vibrancy.g36op.mongodb.net/vibrancy?retryWrites=true&w=majority",
           
            // "mongodb+srv://desicover:4sktnbsoGAJvwrh3@cluster0.a64rd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`Database connected : ${con.connection.host}`);
    } catch (error) {
        console.error(`Error could not connect to database: ${error.message}`);
        process.exit(1);
    }
};
module.exports.establishConnection = function () {
    return connectDB();
};
