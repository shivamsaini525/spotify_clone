import { Icon } from '@iconify-icon/react';
// import style from "./LoginComponent.module.css";

const LoginComponent =()=>{
  return(
    <>
       <div className="w-full h-full flex flex-col items-center">
       <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
         <Icon icon="logos:spotify" width="145" /> 
        </div>
        <div className='inputRegion'>
             <form>
                <label type="text" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
                <input type="email" className='p-2 border border-solid border-black-400' placeholder='Enter your email addresas' name="email"></input>
             </form>
        </div>
       
       </div>
    </>
  )
}   
export default LoginComponent