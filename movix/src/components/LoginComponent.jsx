import { Icon } from '@iconify-icon/react';
import TextInput from './shared/TextInput';
// import style from "./LoginComponent.module.css";

const LoginComponent =()=>{
  return(
    <>
       <div className="w-full h-full flex flex-col items-center">
       <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
         <Icon icon="logos:spotify" width="145" /> 
        </div>
        <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col'>
         <div className='font-bold mb-10'>To continue, log in to Spotify</div>
         <TextInput label="Email ID or username" placeholder="Email ID or Username" />
        </div>
       
       </div>
    </>
  )
}   
export default LoginComponent