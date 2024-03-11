import spotify_logo from "../assets/spotify_logo_white.svg";
const HomeComponent=()=>{
    return(
        <>
            <div className="h-full w-full flex">
                <div className="h-full w-1/5 bg-black">
                   <div className="logoDiv p-6">
                       <img src={spotify_logo} alt="spotify logo" width={125} />
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