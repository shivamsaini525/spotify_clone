const PasswordInput=({label, placeholder})=>{
    return(
        <>
            <div className="textInput flex flex-col space-y-2 w-full">
                <label for={label} className='font-semibold'>{label}</label>
                <input type={label} id={label} className='p-2 border-2  border-gray-400 border-solid rounded placeholder-gray-400' placeholder={placeholder} name={label}></input>
            </div>
    </>
    )
}
export default PasswordInput
