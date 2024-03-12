import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import { TiHome } from "react-icons/ti";
const HomeComponent=()=>{
    return(
        <>
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
                <div className="h-full">
                   main content
                </div>
            </div>
        </>
    )
}
export default HomeComponent