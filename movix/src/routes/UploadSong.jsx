// import spotify_logo from "../assets/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";
// import { Icon } from '@iconify-icon/react';
import {Link, useNavigate} from 'react-router-dom';
// import { TiHome } from "react-icons/ti";
// import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import {useState} from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelper";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong=()=>{
const [name, setName] = useState("");
const [thumbnail, setThumbnail]=useState("");
const [playlistUrl, setPlaylistUrl]=useState("");
const [uploadedSongFileName,setUploadedSongFileName]=useState();
const navigate=useNavigate();

const submitSong=async()=>{
    
    const data={name, thumbnail, track: playlistUrl};
    console.log(data);
    const response= await makeAuthenticatedPOSTRequest("/song/create",data);
    console.log(response); 
    if(response.err){
        alert("could not create song");
        return;
    }
    alert("success");
    navigate("/home");

}

    return(
        <>
         <LoggedInContainer curActiveScreen="uploadsong">
         <div className="content text-white p-8 pt-0 overflow-auto">
                        <div className="text-2xl font-semibold mb-5 text-white mt-8">Upload Your Music</div>
                        <div className="w-2/3 flex space-x-3">
                           <div className="w-1/2">
                             <TextInput
                               label="Name"
                               labelClassName={"text-white"}
                               inputclassName={"text-black"}
                               placeholder="Name"
                               value={name}
                               setValue={setName} />
                               
                           </div>
                           <div className="w-1/2">
                             <TextInput label="Thumbnail"
                               labelClassName={"text-white "}
                               inputclassName={"text-black"}
                               placeholder="Thumbnail"
                               value={thumbnail}
                               setValue={setThumbnail}
                                />
                           </div>
                           
                           
                        </div>
                        <div className="py-5">
                         {
                            uploadedSongFileName?(
                            <div className="bg-white text-black rounded-full p-3 w-1/3">{uploadedSongFileName.substring(0,35)}...</div> ):(
                          <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName} /> )

                         }
                                                   
                        </div>
                        <div className="bg-white text-black w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold" onClick={submitSong}>
                            Submit Song
                        </div>
                        
                    </div>
            </LoggedInContainer>

        </> 
    )
}




export default UploadSong