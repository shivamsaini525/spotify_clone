// import spotify_logo from "../assets/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";
// import { Icon } from '@iconify-icon/react';
// import {Link} from 'react-router-dom';
// import { TiHome } from "react-icons/ti";
// import TextWithHover from "../components/shared/TextWithHover";
// import { useState } from "react";
// import {Howl, Howler} from 'howler';
import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData=[
    {
        title:"Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1645207213625-aa6367cbab66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1645860265927-02deb3fe4359?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background ",
        imgUrl: "https://images.unsplash.com/photo-1646734329499-0afb2db25fb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   { 
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats ",
        imgUrl: "https://images.unsplash.com/photo-1645036993886-efdfd96ca97f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
        title: "Beats to think to",
        description: "Focus with deep base techno ",
        imgUrl: "https://images.unsplash.com/photo-1645207213625-aa6367cbab66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
];

const spotifyPlaylistData=[
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1645860265927-02deb3fe4359?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Honey Singh",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1708848505326-b7c742af6b9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    { 
        title: "Beautiful",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1708984667834-7ecb703e2bff?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Sam Saini",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Neha Kaur",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1698305429092-914783297c83?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }
]

const LogedinHome=()=>{
    return(
        <>
        <LoggedInContainer curActiveScreen="home" >
            <PlaylistView  titleText="Focus"  cardData={focusCardsData}/>
            <PlaylistView  titleText="Playlist" cardData={spotifyPlaylistData} />
            <PlaylistView  titleText="Sound of India" cardData={focusCardsData} />

        </LoggedInContainer>

        </>
    );
};


const PlaylistView=({titleText, cardData})=>{
    return(
        <>
            <div className="text-white mt-8">
                <div className="text-2xl font-semibold mb-5">{titleText}</div>
                <div className="w-full flex justify-between space-x-4">
                   
                   {
                    cardData.map(item=>{
                        return <Card title={item.title} key={item.title} description={item.description} imgUrl={item.imgUrl} /> 
                    })
                   }
                </div>
            </div>
        </>
    );
};

const Card=({title,description,imgUrl})=>{
    return( 
        <>
        <div className="bg-black bg-opacity-40 w-1/6 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md " src={imgUrl}  alt="label" />
            </div>
            <div className="text-white  font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm"> {description}</div>

        </div>
                
        </>
    );    
};
export default LogedinHome