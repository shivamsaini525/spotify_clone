const TextInput=({label, placeholder, className})=>{
    return(
        <>
            <div className={`textInput flex flex-col space-y-2 w-full ${className}`}>
                <label for={label} className='font-semibold'>{label}</label>
                <input type={label} id={label} className='p-2 border  border-gray-600 border-solid rounded placeholder-gray-400' placeholder={placeholder} name={label}></input>
            </div>
    </>
    )
}
export default TextInput