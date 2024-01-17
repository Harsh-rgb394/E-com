const jwt=require("jsonwebtoken");
const users = require("../Models/UserModel");

const tokenget=async(req,res,next)=>{

    try {
        const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        // is decode se verify hogar jo token aaega use pass karay hai user ko 
        req.user=decode;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Cannot get auth",success:false});
        
    }
}


// another middelware for admin access 
const adminaccess=async(req,res,next)=>{
    try {
        const adminuser=await users.findById(req.user._id);
        console.log(adminuser);
        if(adminuser.role!==1){
            res.status(400).send({message:"Anthorized user",success:false});
        }
        else{
            next();
        }
    }
  
     catch (error) {
        console.log(error)
        res.status(500).send({message:"failed to admin",success:false});
        
    }
}

module.exports={tokenget,adminaccess};