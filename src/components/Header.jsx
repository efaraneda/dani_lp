import React, {useState} from "react";
//Icons
import { 
        RiCheckboxBlankCircleFill, 
        RiMenu3Fill,
        RiCloseLine
    } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 xl:px-20  h-[10vh] z-50">
                <div className="xk:w-1/6 text-center -mt-4">
                    <a className="text-2xl text-primarytext font-bold relative -py-3 px-1 bg-white">     
                            dani 

                            <RiCheckboxBlankCircleFill className="absolute text-primary -left-3 -bottom-3 -z-10"/>
                            </a>
                        
                    
                </div>
            </header>
            // xl:hidden permite esconder algo en la versión desktop
    )
};


export default Header