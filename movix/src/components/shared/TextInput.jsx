const TextInput=({label, placeholder, className,value, setValue,labelClassName})=>{
    return(
        <>
            <div className={`textInput flex flex-col space-y-2 w-full ${className}`}>
                <label for={label} className={`font-semibold ${labelClassName}`}>{label}</label>
                <input type={label} id={label} className='p-2 border-2  border-gray-600 border-solid rounded placeholder-gray-400'
                 placeholder={placeholder} name={label} 
                 value={value} 
                 onChange={(e)=>{
                   setValue(e.target.value);
                 }}
                ></input>
            </div>
    </>
    )
}
export default TextInput