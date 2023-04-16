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
<div className="bg-gray-200 flex flex-col items-center sm:h-600 py-40">
  {/* Contador */}
  <div className="flex flex-wrap justify-center md:flex-row space-x-2 mb-20">
    <h2 className="absolute h-[200px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-primarytext sm:max-w-xs">
      Sólo faltan
    </h2>
    <div className="shadow-xl rounded-lg w-20 h-24 sm:w-18 sm:h-18  bg-white rounded-md flex flex-col justify-center items-center text-primarytext font-bold relative">
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
  <p className="flex flex-col items-center text-center w-[45%] sm:w-[90%]">La versión v1 beta estará disponible, a partir del día 30 de junio de 2023 a las 13:00 GMT-3, para uso gratuito. Acceso reservado para usuarios registrados hispanohablantes, mayores de 18 años.
  </p>  
</div>

    );
  };
  



export default Mid