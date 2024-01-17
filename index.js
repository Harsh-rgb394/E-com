
const express =require("express");
const colors=require("colors");
const dotenv=require("dotenv");
const morgan =require("morgan");
const MongoConnect=require("./config/db");
const cors=require("cors");
// const userRoute=require("./Routes/userRoute");
const app=express();
dotenv.config();
MongoConnect();

// enviroment varibles 
const PORT=process.env.PORT || 5000;
const DEV_MODE=process.env.DEV_MODE;

// here middlewares 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// now apis for users 
app.use("/api/v1/user",require("./Routes/userRoute"));








app.listen(PORT,()=>{
    console.log(`server is successfully running on ${PORT} and dev mode ${DEV_MODE}`.bgCyan);
})