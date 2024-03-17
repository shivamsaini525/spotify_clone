const mongoose=require("mongoose");

const Playlist= new mongoose.Schema({
 
    name:{
        type:String,
        required: true,
    },
    thumbnail:{
        type:String,
        required: true,
    },
    songs:[
        {
        type:mongoose.Types.ObjectId,
        ref:"song",
    
    }],
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        
    },
    collaborator:[{
        type:mongoose.Types.ObjectId,
        ref:"User",

    }]



});

const PlaylistModel=mongoose.model("Playlist",Playlist);

module.exports=PlaylistModel;
 