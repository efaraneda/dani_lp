import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Links = () => {
  return (
    <div className="text-secondarytext h-[50vh] sm:h-[75vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 w-full py-14">
      <div className="flex flex-col items-center justify-left">
        <div className="sm:w-[60%] text-4xl text-primarytext font-bold relative bg-white px-1.5">
          dani<t className="text-primary text-4xl font-bold -py-1">Chat</t>
          <RiCheckboxBlankCircleFill className="absolute text-primary -left-5 -bottom-5 -z-10" />
        </div>

        <p className="px-14 py-10 h-[40px] -mr-2">
          Dani es un agente generativo de última generación, entrenado para ayudar a personas con depresión y ansiedad
        </p>
      </div>

      <div className="sm:px-14 sm:py-6 flex sm:flex-row flex-col items-center justify-left">
        <div className="flex items-center">

            <div>
               <h4 className="py-4 font-bold mb-2">Chile</h4>
                <a href="https://psicologogratis.cl" className="py-4 hover:text-primary">
                Visítanos
                </a>
            </div>
        </div>
    </div>


    <div className="sm:px-14 flex sm:flex-row flex-col items-center justify-left">
        <div className="flex items-center">
            <div>
            <h4 className="py-4 font-bold mb-2">Argentina</h4>
        
        <a href="https://psicologogratis.ar" className="py-4 hover:text-primary">
        Visítanos
                </a>
            </div>
        </div>
    </div>
    <div className="sm:px-14 flex sm:flex-row flex-col items-center justify-left">
        <div className="flex items-center">
        <div>
            <h4 className="py-4 font-bold mb-2">Home</h4>
        <a href="https://dani.chat" className="py-4 hover:text-primary">
          Visítanos
          </a>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Links;
