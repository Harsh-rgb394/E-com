const users=require("../Models/UserModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


const registerController=async(req,res)=>{
    try {
        const user=await users.findOne({email:req.body.email});

        if(user){
            res.status(201).send({message:"already register",success:false});
        }
        const password=req.body.password;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);
        req.body.password=hashedPassword;
        const newuser=new users(req.body);
        await newuser.save();
        res.status(200).send({message:"Succeessfully Register",success:true,data:newuser});
        
      

        
    } catch (error) {
        res.status(500).send({message:"Failed to register",success:false});
        
    }
}

const loginController=async(req,res)=>{
    try {
        const exituser=await users.findOne({email:req.body.email});
        if(!exituser){
            res.status(201).send({message:"Email don't match",success:false});
        }
        const comparedpassword=await bcrypt.compare(req.body.password,exituser.password);

        if(!comparedpassword){
            res.status(201).send({message:"Password not match",success:false});
        }

        const token=await jwt.sign({_id:exituser._id},
            process.env.JWT_SECRET,{
                expiresIn:"1d"
            });
        res.status(200).send({message:"Login successfully",success:true,user:{
            name:exituser.name,
            email:exituser.email,
            phone:exituser.phone,
            Address:exituser.Address,
            role:exituser.role

        },
       token});

        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"failed to login",success:false});
        
    }

}

const work=async(req,res)=>{
    res.send({message:"auth work success"});
}
module.exports={registerController,loginController,work};