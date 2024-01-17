const mongoose =require("mongoose");

const userSchema=mongoose.Schema({
      name:{type:String,
      required:true,
      trim:true},

      email:{
        type:String,
        required:true,
        unique:true
      },
       
      password:{
        type:String,
        required:true
      },
      Address:{
        type:String,
        required:true
      },
      phone:{
        type:String,
        required:true
      },
      role:{
        type:Number,
        default:0
      }

      
}, {timestamps:true})

// timeStampes is used for everytime a new user created a time of created is creation

const users=mongoose.model("users",userSchema);

module.exports=users