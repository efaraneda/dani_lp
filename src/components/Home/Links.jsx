import { RiCheckboxBlankCircleFill } from "react-icons/ri";
//import {Link} from "react-router-dom";

const Links = () => {
  return (
    <div className="text-secondarytext h-[50vh] sm:h-[120vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 w-full py-14">
      <div className="flex flex-col items-center justify-left">
        <div className="sm:w-[60%] text-4xl text-primarytext font-bold relative bg-white px-1.5">
          dani<t className="text-primary text-4xl font-bold -py-1">Chat</t>
          <RiCheckboxBlankCircleFill className="absolute text-primary -left-5 -bottom-5 -z-10" />
        </div>

        <p className="px-14 py-10 h-[40px] -mr-2">
          Dani es un Agente Generativo de última generación, entrenado para ayudar a personas con depresión y ansiedad
        </p>
      </div>

      <div className="sm:px-14 sm:py-6 flex sm:flex-row flex-col items-center justify-left">
        <div className="flex items-center">

            <div>
               <h4 className="py-4 sm:py-6 mb-2 sm:mb-0 text-primary sm:font-bold">Navega</h4>
               <div className="flex flex-col">
                  <a href='https://dani.chat/privacidad' className="items-center md:h-10 md:w-20
                  text-center hover:text-primary hover:font-bold flex items-center " rel='nofollow'>Privacidad</a>
                  <a href='https://psicologogratis.ar' className="items-center md:h-10 md:w-20
                  text-center hover:text-primary hover:font-bold flex items-center sm:py-[14px]" rel='nofollow'>Argentina</a>
                  <a href='https://psicologogratis.cl' className="items-center md:h-10 md:w-20
                  text-center hover:text-primary hover:font-bold flex items-center " rel='nofollow'>Chile</a>
              {/* 
                <Link to='/roadmap' className="items-center md:h-10 md:w-20
                  hover:text-primary hover:font-bold flex items-center">Roadmap</Link> 
                
                <Link to='/privacidad' className="items-center md:h-10 md:w-20
                 hover:text-primary hover:font-bold flex items-center">Privacidad</Link>

                <Link to='/research' className="items-center md:h-10 md:w-20
                 text-center hover:text-primary hover:font-bold flex items-center">Research</Link>
                */}

                 </div>
                

            </div>
        </div>
      </div>

      <div className="sm:px-14 flex sm:flex-row flex-col items-center justify-left">
          <div className="flex items-center">
              <div >
              <h4 className="py-4 sm:py-1 mb-2 text-primary sm:font-bold">Comparte</h4>

                <div className="flex flex-col ">
                <a href="https://wa.me/?text=Mira, Esto está bacán!! https://dani.chat" target="_blank" 
                data-action="share/whatsapp/share" className="py-2 hover:text-green-400" rel='nofollow'>
                  Compartir en WhatsApp 
                  </a>
                  <a href="https://t.me/share/url?url=https://dani.chat&text=Mira, Esto está bacán!!" 
                      target="_blank" 
                      className="py-2 hover:text-blue-500" rel='nofollow'>
                  Compartir en Telegram</a>
                  

                </div>
              </div>
          </div>
      </div>
      <div className="sm:px-14 sm:py-10 flex sm:flex-row flex-col items-center justify-left">
          <div className="flex items-center">
          <div>

              </div>
          </div>
          <div className="absolute sm:flex sm:flex-row py-10 sm:py-1 mb-10 text-primary sm:font-bold">
          <div className="py-6">  
            <a href="https://psicologogratis.ar/" rel='nofollow'><img src="arg-flag.webp" alt="Bandera de Argentina" className="w-[40px] h-[26px] rounded opacity-70 hover:opacity-100"></img></a>
            </div>
              <div className="-py-4 sm:py-6 sm:px-2">
                <a href="https://psicologogratis.cl/" rel='nofollow'><img src="cl-flag.svg" alt="Bandera de Chile" className="w-[40px] h-[26px] rounded opacity-70 hover:opacity-100"></img></a>
              </div>
          </div>
      </div>
   </div>
  );
};

export default Links;

