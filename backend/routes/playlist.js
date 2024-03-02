const express=require('express');
const passport = require('passport');
const router=express.Router();
const Playlist=require('../models/Playlist')

router.post("/create/playlist",passport.authenticate("jwt",{session:false}),async(req,res)=>{
  const curentUser=req.user
  const {name,thumbnail,songs}=req.body;
  if(!name || !thumbnail || !songs){
    return res.status(301).json({error:"insufficient data"});
  }
  const playlistData={
    name,
    thumbnail,
    songs,
    owner:curentUser._id,
    collaborator:[],
  }
  const createPlaylist=await Playlist.create(playlistData);
  return res.status(200).json(createPlaylist);
});

router.get("/get/:playlistID",passport.authenticate("jwt",{session:false}),async(req,res)=>{

    const playlistId=req.params.playlistID;
    const playlist=await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(300).json({error:"invaild ID"})
    }
    return res.status(200).json(playlist);

});

module.exports=router;