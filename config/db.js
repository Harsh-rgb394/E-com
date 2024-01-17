const mongoose =require("mongoose");
const MongoConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection is success".bgBlue);
    } catch (error) {
        console.log("failed to connect".bgRed);
        
    }
}

module.exports=MongoConnect;