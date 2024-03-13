import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import { TiHome } from "react-icons/ti";
import TextWithHover from "../components/shared/TextWithHover";
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

                
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className="navbar flex items-center justify-end w-full bg-black text-white h-1/10 bg-opacity-30" style={{"justifyContent":"end"}}>
                        <div className="w-1/2 flex h-full ">
                            <div className="w-3/5 flex justify-around items-center ">
                                <TextWithHover displayText={"Premium"}/>
                                <TextWithHover displayText={"Support"}/>
                                <TextWithHover displayText={"Download"}/>
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-2/5 flex justify-around h-full items-center">
                                <TextWithHover displayText={"Sign up"}/>
                                <div className="">
                                    <button className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold text-black">Log In</button>
                                </div>   
                            </div>
                            
                            
                        </div>
                       
                        
                    </div> 
                    <div className="content text-white p-8 overflow-auto">
                      <PlaylistView  titleText="Focus" />
                      <PlaylistView  titleText="Spotify Playlist" />
                      <PlaylistView  titleText="Sound of India" />
                    </div>
                </div>
            </div>
        </>
    )
}

const PlaylistView=({titleText, cardData})=>{
    return(
        <>
            <div className="text-white">
                <div className="text-2xl font-semibold mb-5">{titleText}</div>
                <div className="w-full flex justify-between space-x-4">
                    <Card title="Peaceful Piano" description="Relax and indulge with beautiful piano pieces" src="https://images.unsplash.com/photo-1633622800679-bf4dfaa260c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card title="Deep Focus" description="Keep calm and focus with this music" src="https://images.unsplash.com/photo-1645207213625-aa6367cbab66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card title="Instrumental Study" description="Focus with soft study music in the background" src="https://images.unsplash.com/photo-1645860265927-02deb3fe4359?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card title="Focus Flow" description="Up tempo instrumental hip hop beats" src="https://images.unsplash.com/photo-1646734329499-0afb2db25fb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card title="Beats to think to" description="Focus with deep base techno" src="https://images.unsplash.com/photo-1645036993886-efdfd96ca97f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </div>
        </>
    );
};

const Card=({title,description,src})=>{
    return( 
        <>
        <div className="bg-black bg-opacity-40 w-1/6 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md " src={src}  alt="label" />
            </div>
            <div className="text-white  font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm"> {description}</div>

        </div>
                
        </>
    );    
};
export default HomeComponent