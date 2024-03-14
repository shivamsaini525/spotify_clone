import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import {Link} from 'react-router-dom';
// import { TiHome } from "react-icons/ti";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";

const UploadSong=()=>{
    return(
        <>
        {/* sidebar */}
            <div className="h-full w-full flex">
                <div className="h-full w-1/5 bg-black  flex flex-col justify-between pb-10">
                    <div className="">
                        <div className="logoDiv p-6">
                            <img src={spotify_logo} alt="spotify logo" width={125} />
                        </div>
                        <div className="py-5">
                                <IconText iconName={"material-symbols-light:home"} displayText={"Home"} active/>
                                <IconText iconName={"material-symbols:search"}   displayText={"Search"}/> 
                                <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
                                <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My Music"}/>

                        </div>
                        <div className="">
                                <IconText iconName={"ph:plus-fill"} displayText={"Create Playlist"}/>
                                <IconText iconName={"healthicons:heart-negative"} displayText={"Liked Song"}/>
                        </div>
                    </div>
                   
                   <div className="px-5">
                        <div className="border border-gray-100  rounded-full w-2/5 flex items-center justify-center text-white px-2 py-1 cursor-pointer">
                        <Icon icon="carbon:earth" width="1.2em" height="1.2em"  />
                        <div className="ml-2 mr-1 text-sm font-semibold">English</div> 
                        </div>
                    </div>
                </div>

                     
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    {/* navbar */}
                    <div className="navbar flex items-center justify-end w-full bg-black text-white h-1/10 bg-opacity-30" style={{"justifyContent":"end"}}>
                        <div className="w-1/2 flex h-full ">
                            <div className="w-2/3 flex justify-around items-center ">
                                <TextWithHover displayText={"Premium"}/>
                                <TextWithHover displayText={"Support"}/>
                                <TextWithHover displayText={"Download"}/>
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                                <TextWithHover displayText={"Upload Song"}/>
                                <div className="">
                                    <button className="bg-white h-2/3 w-10 h-10 flex items-center justify-center rounded-full font-semibold text-black"><Link to="/login">SS</Link></button>
                                </div>   
                            </div> 
                        </div>            
                    </div> 

                    {/* main content */}
                    <div className="content text-white p-8 pt-0 overflow-auto">
                        <div className="text-2xl font-semibold mb-5 text-white mt-8">Upload Your Music</div>
                        <div className="w-2/3 flex space-x-3">
                           <div className="w-1/2">
                             <TextInput
                               label="Name"
                               labelClassName={"text-white"}
                               placeholder="Name" />
                           </div>
                           <div className="w-1/2">
                             <TextInput label="Thumbnail"
                               labelClassName={"text-white"}
                               placeholder="Thumbnail" />
                           </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}




export default UploadSong