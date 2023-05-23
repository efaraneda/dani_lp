import {  useState, useEffect } from "react";


const Mid = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer);
    }, [timeLeft]);

    function calculateTimeLeft() {
      const targetDate = new Date("June 30, 2023").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implementar la validación de correo electrónico y número de teléfono aquí

    };
  
    return (
<div className="bg-gray-200 flex flex-col items-center sm:h-600 py-40 sm:py-30 ">
  {/* Contador */}
  <div className="my-20 flex flex-wrap justify-center md:flex-row space-x-2 mb-20">
    <h2 className="-my-8 absolute h-[200px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-primarytext sm:max-w-xs">
      Sólo faltan
    </h2>
    <div className=" shadow-xl rounded-lg w-20 h-24 sm:w-18 sm:h-18  bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
      <div className="absolute top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">
        {timeLeft.days}
      </div>
      <div className="absolute bottom-3 w-full text-center text-primarytext text-normal font-light">
        Días
      </div>
    </div>
    <div className="shadow-xl rounded-lg w-20 h-24 sm:w-18 sm:h-18 bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
      <div className="absolute top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">
        {timeLeft.hours}
      </div>
      <div className="absolute bottom-3 w-full text-center text-primarytext text-normal font-light">
        Horas
      </div>
    </div>
    <div className="shadow-xl rounded-lg w-20 h-24 sm:w-18 sm:h-18 bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
      <div className="absolute top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">
        {timeLeft.minutes}
      </div>
      <div className="absolute bottom-3 w-full text-center text-primarytext text-normal font-light">
        Minutos
      </div>
    </div>
    <div className="shadow-xl rounded-lg w-20 h-24 sm:w-18 sm:h-18 bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
      <div className="absolute top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">
        {timeLeft.seconds}
      </div>
      <div className="absolute bottom-3 w-full text-center text-primarytext text-normal font-light">
        Segundos
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center text-center
               w-[45%] sm:w-[90%]">
                <h3>Dani estará disponible para uso 
                  <a className="font-bold"> gratuito</a>, a partir del día 30 de junio de 2023, a las 13:00 GMT-3, bajo una versión Alpha.
        Seleccionaremos a un pequeño grupo de <a className="font-bold">sólo 200 personas</a>, en la primera etapa</h3><div className="py-16">


        </div>

  </div>
    
    <div className="flex justify-center md:space-x-4 sm:flex-col  sm:space-y-2 ">
      <div className="shadow-xl rounded-lg w-52 h-16 sm:w-18 sm:h-18  bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
        <div className="absolute top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">

        Edad
        </div>
        <div className="w-full text-center text-xl text-primarytext text-normal font-light">
          +18 años
        </div>
      </div>
      <div className="shadow-xl rounded-lg w-52 h-16 sm:w-18 sm:h-18 bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
        <div className="absolute bottom-20 top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">
          Situación
        </div>
        <div className="absolute bottom-8 w-full text-center text-l text-primarytext text-normal font-light">
          Depresión/ansiedad 
        </div>
      </div>
      <div className="shadow-xl rounded-lg w-52 h-16 sm:w-18 sm:h-18 bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
        <div className="absolute bottom-20 top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2">
          Tech 👀
        </div>
        <div className="absolute bottom-5 w-full text-center text-l text-primarytext text-normal font-light">
          ¿Te gusta la tecnología <br/> y la innovación?
        </div>
      </div>

    </div>

</div>

    );
  };
  



export default Mid