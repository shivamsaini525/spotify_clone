const express=require('express');
const passport = require('passport');
const router=express.Router();
const Playlist=require('../models/Playlist')
const User=require("../models/User");
const Song=require("../models/Song");

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

router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{

    const playlistId=req.params.playlistId;
    const playlist=await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(300).json({error:"invaild ID"})
    }
    return res.status(200).json(playlist);

});


router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
  const artistId=req.params.artistId;
  const artist=await User.findOne({_id:artistId});
  if (!artist){
    return res.status(301).json({error:"invaild artist"});
  }

  const playlist=await Playlist.find({owner:artistId});
  return res.status(200).json({data:playlist});
});

router.post("/add/song/",passport.authenticate("jwt",{session:false}),async(req,res)=>{

  const currentUser=req.user;
  const{playlistId,songId}=req.body;
  const playlist=await Playlist.findOne({_id:playlistId});
  if(!playlist){
    return res.status(300).json({error:"playlist does not exit"});
  }
  if(playlist.owner != currentUser._id && !playlist.collaborator.includes(currentUser._id)){

    return res.status(400).json({error:"not allowed"});
  }

  const song=await Song.findOne({_id:songId})
  if(!song){
    return res.status(400).json({error:"song does not exit"})
  }
  playlist.songs.push(songId);
  await playlist.save();
  return res.status(200).json(playlist);

});

module.exports=router;