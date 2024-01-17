const express =require("express");
const {registerController,loginController,work}=require("../Controllers/userControllers");
const {tokenget,adminaccess}=require("../Middlewares/authMiddleware");
// import { registerController } from "../Controllers/userControllers.js";

const router =express.Router();

// api call for regsiter 
router.post("/register",registerController);

// api call for login 
router.post("/login",loginController);

// testing route 
router.get("/dummy",tokenget,work);

module.exports=router;