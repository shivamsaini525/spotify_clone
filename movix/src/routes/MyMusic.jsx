// import spotify_logo from "../assets/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";
// import { Icon } from '@iconify-icon/react';
// import {Link, useNavigate} from 'react-router-dom';
// import { TiHome } from "react-icons/ti";
// import TextWithHover from "../components/shared/TextWithHover";
// import TextInput from "../components/shared/TextInput";
// import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import {useState,useEffect} from "react";
import {makeAuthenticatedGETRequest} from "../utils/serverHelper";
import SingleSongCard from "../components/shared/SingleSongCard";
import {Howl, Howler} from 'howler';
import LoggedInContainer from "../containers/LoggedInContainer";



const MyMusic=()=>{
    const [songData,setSongData]=useState([]);
    const [soundPlayed, setSoundPlayed]=useState(null);
    
    const playSound=(songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop();
        }

        let sound= new Howl({
            src:[songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        console.log(sound)
    }
    
    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthenticatedGETRequest("/song/get/mysongs");
                setSongData(response.data);
                console.log(response.data);
        };
        getData()


    },[]);

    return(<>
        <LoggedInContainer>
            {/* <div className="content text-white p-8 overflow-auto "> */}
                <div className="text-2xl font-semibold pb-5 pt-8 text-white pl-2">My Music</div>
                <div className="space-y-3 overflow-auto">
                    {songData.map((item)=>{

                    return <SingleSongCard info={item} key={item._id} playSoundd={playSound} />})}
                </div>
            {/* </div> */}



        </LoggedInContainer>




    </>)



};

export default MyMusic