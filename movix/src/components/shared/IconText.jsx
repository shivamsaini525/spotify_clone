import { Icon } from '@iconify-icon/react';
import {Link} from "react-router-dom";

const IconText=({iconName, displayText, active, targetLink})=>{
    return(
        <>
        <Link to={targetLink} className='block' style={{textDecoration:"none"}}>
            <div className="flex items-center justify-start cursor-pointer">
                <div className='pr-4 pl-12 py-2' style={{color: active ? 'white' : 'gray' }} >
                {/* <TiHome color='white' fontSize={23} /> */}
                <Icon icon={iconName}  fontSize={35}  />
                </div>
                <div className={`${active?"text-white":"text-gray-400"} text-sm font-semibold hover:text-white`}>
                    {displayText}
                </div>
            </div>
        </Link>
        </> 

    )
}
export default IconText