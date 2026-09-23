const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected Sucessfully");     
    } catch (error) {
        console.log("MongoDB connection faild: ", error.message);
        process.exit(1);
    };
};

module.exports = connectDB;