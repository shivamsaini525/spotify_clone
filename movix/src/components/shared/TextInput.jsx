const TextInput=()=>{
    return(
        <>
            <div className="textInput flex flex-col space-y-2 w-full">
                <label for="124" className='font-semibold'>Email</label>
                <input type="email" id="124" className='p-2 border  border-gray-400 border-solid rounded placeholder-gray-400' placeholder='Enter your email addresas' name="email"></input>
            </div>
    </>
    )
}
export default TextInput