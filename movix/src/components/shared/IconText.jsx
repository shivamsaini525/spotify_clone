import { Icon } from '@iconify-icon/react';
import { TiHome } from "react-icons/ti";

const IconText=({iconName, displayText, active})=>{
    return(
        <>
        <div className="flex items-center justify-start cursor-pointer">
            <div className='px-5 py-2' style={{ color: active ? 'white' : 'gray' }} >
               {/* <TiHome color='white' fontSize={23} /> */}
              <Icon icon={iconName}  fontSize={35}  />
            </div>
            <div className={`${active?"text-white":"text-gray-400"} text-sm font-semibold hover:text-white`}>
                {displayText}
            </div>
        </div>

        </> 

    )
}
export default IconText