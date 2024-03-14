const express=require("express");
const User=require("../models/User")
const router=express.Router();
const bcrypt=require('bcrypt');
const {getToken}=require("../utils/helper")


router.post("/register",async(req,res)=>{
 
    const{email, password, firstName, lastName, userName}=req.body;
   // find user if already exits
    const user=await User.findOne({email:email});
    if (user){
        return res
        .status(403)
        .json({error:"This user already exits!!"});
    }
    // password hash
    const hasedPassword=await bcrypt.hash(password,10);
    // create user
    const newUserData={email, password:hasedPassword, firstName, lastName, userName};
    const newUser=await User.create(newUserData)
    const token=await getToken(email,newUser);
    const usertoReturn={...newUser.toJSON(),token};
    delete usertoReturn.password;
    return res.status(200).json(usertoReturn);

});

router.post("/login",async(req,res)=>{


    const { email, password }=req.body;
    const user= await User.findOne({email:email});
    
    if(!user){
        return res.status(403).json({error:"Email is wrong"});
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(403).json({error:"password is wrong"});
    }
    const token=await getToken(user.email,user);
    const usertoReturn={...user.toJSON(),token};
    delete usertoReturn.password;
    return res.status(200).json(usertoReturn);

    // return res.status(200).json({message:"you are longin succesful"});


});

module.exports=router;
