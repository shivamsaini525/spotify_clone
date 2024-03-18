import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import {Link} from 'react-router-dom';

import TextWithHover from "../components/shared/TextWithHover";
import { useContext,useLayoutEffect, useRef } from "react";
import {Howl, Howler} from 'howler';
import songContext from "../contexts/songContext";



const LoggedInContainer = ({children,curActiveScreen}) => {
    // const [createPlaylistModalOpen, setCreatePlaylistModalOpen] =
    //     useState(false);
    // const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
   
    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused, 
        setIsPaused,
    } = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        // the following if statement will prevent the useEffect from running on the first render.
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
 
        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong && currentSong.track]);

    // const addSongToPlaylist = async (playlistId) => {
    //     const songId = currentSong._id;

    //     const payload = {playlistId, songId};
    //     const response = await makeAuthenticatedPOSTRequest(
    //         "/playlist/add/song",
    //         payload 
    //     );
    //     if(response._id){
    //         setAddToPlaylistModalOpen(false)
    //     }
    // };

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    };



    return(
        <>
            <div className="h-full w-full bg-app-black ">
                <div className={`${currentSong?"h-9/10":"h-full"} h-9/10 w-full flex`}>
                    <div className="h-full w-1/5 bg-black  flex flex-col justify-between pb-10">
                        <div className="">
                            <div className="logoDiv p-6">
                                <img src={spotify_logo} alt="spotify logo" width={125} />
                            </div>
                            <div className="py-5">
                                    <IconText iconName={"material-symbols-light:home"} displayText={"Home"} active={curActiveScreen==="home"} targetLink={"/home"}/>
                                    <IconText iconName={"material-symbols:search"}   displayText={"Search"} targetLink={"/home"}  active={curActiveScreen==="search"} /> 
                                    <IconText iconName={"icomoon-free:books"} displayText={"Library"} targetLink={"/home"}  active={curActiveScreen==="library"}/>
                                    <IconText iconName={"material-symbols:library-music-sharp"} displayText={"My Music"}  active={curActiveScreen==="myMusic"} targetLink="/myMusic"/>

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
                                <div className="w-2/3 flex justify-around items-center ">
                                    <TextWithHover displayText={"Premium"}/>
                                    <TextWithHover displayText={"Support"}/>
                                    <TextWithHover displayText={"Download"}/>
                                    <div className="h-1/2 border-r border-white"></div>
                                </div>
                                <div className="w-1/3 flex justify-around h-full items-center">
                                    <TextWithHover displayText={"Upload Song"}   />
                                    <div className="">
                                        <button className="bg-white h-2/3 w-10 h-10 flex items-center justify-center rounded-full font-semibold text-black block" style={{textDecoration:"none"}}><Link to="/login" style={{textDecoration:"none"}}>SS</Link></button>
                                    </div>   
                                </div>
                                
                                
                            </div>
                        
                            
                        </div> 
                        <div className="content text-white p-8 pt-0 overflow-auto">
                            {children}
                        </div>
                    </div>
                </div>   
                {/* cureent player song player  */}
                { currentSong && 
                <div className="w-full h-1/10 bg-black ng-opacity-30 text-white flex items-center px-4">
                    <div className="w-1/4 flex items-center">
                        <img src={currentSong.thumbnail}
                        alt="clash" 
                        className="h-14 w-14 rounded"

                        />
                        <div className="pl-4">
                            <div className="text-sm hover:underline cursor-pointer">{currentSong.name}</div>
                            <div className="text-xs text-gray-500 hover:underline cursor-pointer">{currentSong.artist.firstName +" "+currentSong.artist.lastName}</div>
                        </div>
                    </div> 
                    <div className="w-1/2 flex justify-center h-full flex-col items-center">
                        <div className="flex w-1/3 justify-between items-center">
                            <Icon icon="ph:shuffle-fill" fontsize={30} className="text-gray-500 hover:text-white cursor-pointer" />
                            <Icon icon="mdi:skip-previous-outline" fontSize={30} className="text-gray-500 hover:text-white cursor-pointer"
                            />
                            <Icon icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle"}  className="text-gray-500 hover:text-white cursor-pointer" style={{fontSize:'31px'}} onClick={togglePlayPause} />
                            <Icon icon="mdi:skip-next-outline" fontSize={30} className="text-gray-500 hover:text-white cursor-pointer" />
                            <Icon icon="ic:twotone-repeat" fontSize={30} className="text-gray-500 hover:text-white cursor-pointer text-2xl"/>
                        </div>
                        <div className=" "></div>
                    </div>
                    <div className="w-1/4 flex justify-end">hello</div>
                </div> 
                }
            </div>
        </>
    )
}


export default LoggedInContainer