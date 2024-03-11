import { Icon } from '@iconify-icon/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
// import style from "./LoginComponent.module.css";
import {Link} from 'react-router-dom';

const SignupComponent =()=>{
  return(
    <>
       <div className="w-full h-full flex flex-col items-center">
       <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
         <Icon icon="logos:spotify" width="145" /> 
        </div>
        <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col'>
         <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening.</div>

         <TextInput label="Email Address" placeholder="Enter your Email Email " className="my-6" />
         <TextInput label="Confirm Email Address" placeholder="Enter your Email again" className="mb-6" />

         <PasswordInput label="Create Password" placeholder="Enter a Strong Password" />
         <TextInput label="What should we call you?" placeholder="Enter a Profile Name" className="my-6" />
         <div className="w-full flex items-center justify-center my-8">
           <button className='bg-green-400 font-semibold p-3 px-10 rounded-full  '>SIGN UP</button>
          </div>
          <div className='w-full border border-solid border-gray-300'></div>
          <div className='my-6 font-font-semibold text-lg'>Already Have an account</div>
          <div className='border-4 border-black-600 text-gray-500 w-full flex items-center  justify-center py-4 rounded-full'><Link to="/login">LOG IN INSTEAD</Link></div>
        </div>
       
       </div>
    </>
  )
}   
export default SignupComponent