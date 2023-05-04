import { useState } from "react";
import {Link} from "react-router-dom";

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
                
                dani<span className="text-primary text-2xl font-bold -py-3">Chat</span>{" "}

                    <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 
                                                            text-primary -z-10" />
                    </a>

            </div>
            <div className="hidden">
            <nav
                className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
                            showMenu ? "left-0" : "-left-full"} 
                            top-0 xl:static flex-1 flex flex-col xl:flex-row 
                            items-center justify-center gap-10 
                            transition-all duration-500 z-50`}>
            

                {/*
                <Link to='/roadmap' className="items-center md:h-10 md:w-20
                 text-center hover:text-primary hover:font-bold flex items-center justify-center">Roadmap</Link> 
                
                <Link to='/privacidad' className="items-center md:h-10 md:w-20
                 text-center hover:text-primary hover:font-bold flex items-center justify-center">Privacidad</Link>

                <Link to='/research' className="items-center md:h-10 md:w-20
                 text-center hover:text-primary hover:font-bold flex items-center justify-center">Research</Link>
                */}
            </nav>
            
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden text-2xl p-2">
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
            </div>
        </header>
  );
};

export default Header;