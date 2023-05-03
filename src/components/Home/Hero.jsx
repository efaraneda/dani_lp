
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

//import axios from "axios";

const Hero = () => {

  const WLinitialState = {
num: 'sin data'
}

const [WLState, setWLState] = useState(WLinitialState);
/*
useEffect(() => {
  const fetchData = async () => {
  try {
const WLResponse = await axios.get('https://daniai-website-data.s3.us-east-2.amazonaws.com/waiting_list/rows_waiting_list.csv');
const num = WLResponse.data.split('\n')[1];
setWLState({ ...WLState,num});
} catch (error) {
console.error(error);
}
};
fetchData();
}, []);*/


// AMPLITUDE - Track events with optional properties

  


    return (
      <section className="h-[80vh] grid grid-cols-1 md:grid-cols-8">
        <div className='md:col-span-5 flex items-center justify-center p-8'> {/*Información CTA*/}
          <div>
            <h1 className='text-4xl font-bold  text-primarytext'>
              <span className='text-primary'>ChatBot </span>psicológico,<br/>apoyo <span className='text-primary'> 
                  emocional</span> 24/7
            </h1>
            <br/>
            <h2>
              <div className='text-secondarytext text-base leading-[1.5rem] xl:max-w-lg'>
                <div>
                 Dani es un <a href='https://arxiv.org/abs/2304.03442' target="_blank" className='font-semibold'>Agente Generativo
                  </a>, basado en ChatGPT. Entrenado para ayudar a personas con depresión y ansiedad, a 
                  través del método de<a className='font-semibold'> Terapia Cognitivo Conductual</a>
  
                
                  </div>
              </div>
            </h2>
            <br/>
            <div className='xl:flex items-center gap-4 py-2'>
            <Link
                to="acceso"
                smooth={true}
                duration={1050}
                className="hover:text-gray-400 cursor-pointer"
              >
                <button className="bg-primary hover:bg-cta text-white py-2 px-6 rounded-xl text-xl">Acceder</button>
                </Link>
              {WLState.num !== 'sin data' && (
                <p className="italic text-base text-secondarytext py-2">
                  {WLState.num} personas delante de ti en lista de espera
                </p>
              )}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="sm:hidden md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="ret.png"
            className='object-cover -mt-22 h-[300px] -mx-11'
          />
          <div className="relative  p-4 flex flex-col justify-center gap-2 max-h-[70px] max-w-[299px] mx-auto -mt-10">
            <div className="text-xl text-center font-bold tracking-[2px] text-gray-800">
            </div>
            <div className='text-center '>
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="sm:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
        w-[250px] h-[250px] md:w-[322px] md:h-[322px] bg-gray-100 
         rounded-full -z-10"></div>
        <div className="sm:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
        w-[250px] h-[250px] md:w-[322px] md:h-[322px]  
        border-[11px] border-primary rounded-full"></div>

      </div>
    </section>
  );
};

export default Hero

