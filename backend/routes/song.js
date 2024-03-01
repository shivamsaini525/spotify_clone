const express=require('express');
const passport = require('passport');
const router=express.Router();
const passport=require("passport");
const Song=require('../models/Song');
const User=require("../models/User");

router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{

    const{name, thumbnail, track}=req.body;
    if(!name || !thumbnail || !track){
        return res.status(301).json({error:"insufficient details to create a song"});
    }
    const artist=req.user._id;
    const songDetails={name,thumbnail,track,artist};
    const createdSong=await Song.create(songDetails) ;
    return res.status(200).json(createdSong);

});

router.get("/get/mysong",passport.authenticate("jwt",{session:false}),async(req,res)=>{

    const currentUser=req.user;
    const songs=await Song.find({artist:req.user._id});
    return res.status(200).json({data:songs});

})
router.get("/get/artist",passport.authenticate("jwt"),{session:false},async(req,res)=>{

    const {artistId}=req.body;
    const artist=await User.find({_id:artistId})
    if(!artist){
         return res.status(301).json({error:"Artist dones not exit"});
    }
    const song=await Song.find({artist:artistId});
    return res.status(200).json({data:song});
});

router.get("/get/songname",passport.authenticate("jwt"),{session:false},async(req,res)=>{

    const {songName}=req.body;
    const song=await Song.find({name:songName});
    return res.status(200).json({data:song});
});




module.exports=router