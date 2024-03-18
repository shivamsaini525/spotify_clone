import { Icon } from '@iconify-icon/react';

import bgsam from "../assets/bgsam.svg";
import TextInput from './shared/TextInput';
import PasswordInput from './shared/PasswordInput';
// import style from "./LoginComponent.module.css";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelper';
import { useCookies } from 'react-cookie';

const LoginComponent =()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cookie,setCookie]=useCookies(["token"]);
  const navigate = useNavigate();


  const login=async()=>{
    const data={email,password};
    const response=await makeUnauthenticatedPOSTRequest("/auth/login",data);
    if(response && !response.err){
      console.log(response);
      const token=response.token;
      const date=new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token",token, {path: "/", expires:date});
      alert("login successfully");
      navigate("/home")
    }else{
      console.log("failure");
    }

  };


  return(
    <>
       <div className="w-full h-full flex flex-col items-center">
       <div className='logo pt-4 border-b border-solid border-gray-300 w-full flex justify-center'>
         {/* <Icon icon="logos:spotify" width="145" />  */}
         <img src={bgsam} alt="spotify logo" width={165} style={{backgroundColor:""}} />
        </div>
        <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col'>
         <div className='font-bold mb-4'>To continue, log in to Spotify</div>
         <TextInput label="Email Address or username" placeholder="Email Address or Username" className="my-6" value={email} setValue={setEmail} />
         <PasswordInput label="Password" placeholder="Password" value={password} setValue={setPassword} />
         <div className="w-full flex items-center justify-end my-8">
           <button className='bg-green-400 font-semibold p-3 px-10 rounded-full' onClick={(e)=>{
            e.preventDefault();
            login();
           }}>LOG IN</button>
          </div>
          <div className='w-full border border-solid border-gray-300'></div>
          <div className='my-6 font-font-semibold text-lg'>Don't have an account</div>
          <div className='border-4 border-black-600 text-gray-500 w-full flex items-center  justify-center py-4 rounded-full' ><Link to="/signup" style={{textDecoration:"none",color:"gray"}} > SIGN UP FOR SPOTIFY</Link></div>
        </div>
       
       </div>
    </>
  )
}   
export default LoginComponent