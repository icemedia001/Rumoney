const mongoose = require("mongoose");
const mongodb = process.env.mongodb
const connectDB = async ()=>{
    try{
        await mongoose.connect(mongodb,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected To Database");
    } catch (error){
        console.error("Failed To Connect To Database", error);
        process.exit(1);
    }
};
module.exports=connectDB;