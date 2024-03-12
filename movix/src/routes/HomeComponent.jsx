import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import { TiHome } from "react-icons/ti";
const HomeComponent=()=>{
    return(
        <>
            <div className="h-full w-full flex">
                <div className="h-full w-1/5 bg-black">
                   <div className="logoDiv p-6">
                       <img src={spotify_logo} alt="spotify logo" width={125} />
                   </div>
                   <div>
                    
                    <IconText iconName={"material-symbols-light:home"} displayText={"Home"} active/>
                    <IconText iconName={"material-symbols:search"}   displayText={"Search"}/> 
                    <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
                   </div>
                   <div>
                   
                   <IconText iconName={"ph:plus-fill"} displayText={"Create Playlist"}/>
                   <IconText iconName={"healthicons:heart-negative"} displayText={"Liked Song"}/>
                   </div>
                </div>
                <div className="h-full">
                   main content
                </div>
            </div>
        </>
    )
}
export default HomeComponent