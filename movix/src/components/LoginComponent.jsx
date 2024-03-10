import { Icon } from '@iconify-icon/react';
import TextInput from './shared/TextInput';
import PasswordInput from './shared/PasswordInput';
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
         <TextInput label="Email Address or username" placeholder="Email Address or Username" className="my-6" />
         <PasswordInput label="Password" placeholder="Password" />
         <div className="w-full flex items-center justify-end mt-8">
           <button className='bg-green-400 font-semibold p-3 px-10 rounded-full  '>LOG IN</button>
          </div>
        </div>
       
       </div>
    </>
  )
}   
export default LoginComponent