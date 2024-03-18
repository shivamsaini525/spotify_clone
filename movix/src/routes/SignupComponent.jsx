import { Icon } from '@iconify-icon/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
// import style from "./LoginComponent.module.css";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {useCookies} from "react-cookie";
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelper';

import bgsam from "../assets/bgsam.svg";




const SignupComponent =()=>{
  const [email,setEmail] = useState("");
  const [confirmEmail,setConfirmEmail] =useState("");
  const [userName,setUserName] =useState(""); 
  const [password,setPassword] =useState("")
  const [firstName,setFirstName] =useState("");
  const [lastName,setLastName] =useState("");
  const [cookie, setCookie]=useCookies(["token"]);
  const navigate=useNavigate();

  const signup=async()=>{
    if(email !== confirmEmail){
      alert("Please Enter Valid Email!!");
      return;
    };
  
    const data={email,password,userName,firstName,lastName};
    const response=await makeUnauthenticatedPOSTRequest("/auth/register",data);
    if(response && !response.err){
      console.log(response);
      const token=response.token;
      const date=new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token",token, {path: "/", expires:date});
      alert("signup successfully");
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
         <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening.</div>

         <TextInput label="Email Address" placeholder="Enter your Email Email " className="my-6" value={email} setValue={setEmail} />

         <TextInput label="Confirm Email Address" placeholder="Enter your Email again" className="mb-0" value={confirmEmail} setValue={setConfirmEmail} />

         <TextInput label="User Name" placeholder="Enter Your User Name" className="my-6" value={userName} setValue={setUserName} />

         <PasswordInput label="Password" placeholder="Enter a Strong Password" value={password} setValue={setPassword} />

         <div className='w-full flex justify-between items-center space-x-8'>
           <TextInput label="First Name" placeholder="Enter Your First Name" className="my-6" value={firstName} setValue={setFirstName}  />
           <TextInput label="Last Name" placeholder="Enter Your Last Name" className="my-6" value={lastName} setValue={setLastName}  />
          </div>
        
         <div className="w-full flex items-center justify-center my-8">
           <button className='bg-green-400 font-semibold p-3 px-10 rounded-full' onClick={(e)=>{e.preventDefault();
           signup();
           }}>SIGN UP</button>
          </div>
          <div className='w-full border border-solid border-gray-300'></div>
          <div className='my-6 font-font-semibold text-lg'>Already Have an account</div>
          <div className='border-4 border-black-600 text-gray-500 w-full flex items-center  justify-center py-4 rounded-full'><Link to="/login" style={{textDecoration:"none",color:"gray"}}>LOG IN INSTEAD</Link></div>
        </div>
       
       </div>
    </>
  )
}   
export default SignupComponent