import { useState } from "react";
import {
  RiMenu3Fill,
  RiCloseLine
} from "react-icons/ri";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="bg-primary flex justify-between xl:justify-start w-full py-4 md:px-40 h-[10vh] z-50">
      <div className="xk:w-1/6 flex items-center sm:py-4">
        <img src="theragen_bold_white.png" className='h-[40px]' alt="Theragen" />
        <a className="text-2xl text-white font-medium ">
          Theragen
        </a>
      </div>

      <nav
        className={`fixed text-white font-normal bg-primary -mr-40 w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a
          className="hover:text-gray-400 cursor-pointer"
          href="https://theragen.ai" // Close the menu when link is clicked
        >
          ¿Cómo funciona?
        </a>
        <a
          href="https://theragen.ai"
          className="hover:text-gray-400 cursor-pointer"
        >
          Más información
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 text-white"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
