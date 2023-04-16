import { useState, useEffect } from "react";
import Axios from 'axios';

const Mid = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    country:'',
    city:'',
    submitted: false // estado para verificar si se ha enviado el formulario
  };

  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org/?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;
        
        const locationResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const locationData = await locationResponse.json();
        const country = locationData.country_name;
        const city = locationData.city;
        
        setFormState({ ...formState, country, city });
        
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);


        const handleSubmit = async (e)  => {
          e.preventDefault();
          const url = 'https://jxi7beer7ftg6nzm3lqoeennqq0qzbvb.lambda-url.us-east-2.on.aws/';
          
          var fuente = document.referrer;
          var medio = null;

          if ((/utm_source=/).test(window.location.search)){
              const searchParams = new URLSearchParams(window.location.search);
              const utmSource = searchParams.get('utm_source');
              var fuente = utmSource;
          }

          if ((/utm_medium=/).test(window.location.search)){
              const searchParams = new URLSearchParams(window.location.search);  
              const utmMedium = searchParams.get('utm_medium');
              var medio = utmMedium;
          }

          if (formState.phone === ''){formState.phone = null}
          if (formState.country === ''){formState.country  = null}
          if (formState.message === ''){formState.message = null}
          if (formState.city === ''){formState.city = null}
          if (fuente === ''){fuente = null}
      

          async function enviarMensaje(nombre, email, telefono, mensaje,pais,ciudad) {
            try {
              const respuesta = await Axios.post(url, {
                'Nombre': nombre,
                'Email': email,
                'Telefono': telefono,
                'Mensaje': mensaje,
                'Pais': pais,
                'Ciudad': ciudad,
                'Fuente': fuente,
                'Medio': medio
              }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  handleResetForm()
            } catch (error) {
              console.error(error);
            }
          }
          setFormState({ ...formState, submitted: true });
          enviarMensaje(formState.name, 
                        formState.email, 
                        formState.phone, 
                        formState.message,
                        formState.country,
                        formState.city)
                        
          
        }



  const handleResetForm = () => {
    setFormState(initialState);
  };
  

  return (
    <div className="bg-gray-200 flex flex-col items-center">
      

      <h2 id="acceso" className="flex flex-col items-center justify-center sm:text-center text-3xl font-bold text-primarytext mb-20 sm:max-w-xs h-16 ">
        Estás a un paso de acceder
      </h2>
      
      <form onSubmit={handleSubmit} onReset={handleResetForm} className="md:w-2/4 lg:w-1/2 bg-white p-10 rounded-lg shadow-lg ">
        <br />
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nombre<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-[60%] sm:w-full p-3 rounded-lg border-2 border-gray-300 outline-none focus:border-primary"
            placeholder="¿Cómo te llamas?"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Correo electrónico<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-[60%] sm:w-full p-3 rounded-lg border-2 border-gray-300 outline-none focus:border-primary"
            placeholder="Para avisarte novedades."
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className="w-[60%] sm:w-full p-3 rounded-lg border-2 border-gray-300 outline-none focus:border-primary"
              placeholder="Opcional. Para avisarte novedades"
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              placeholder="Este campo es opcional, pero queremos saber de ti, escucharte y saber cómo te sientes. 
              
¿Qué te trajo aquí y con qué te gustaría que te puedan ayudar <3?"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full h-[200px] sm:h-[205px] p-3 rounded-lg border-2 border-gray-300 outline-none focus:border-primary"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-primary hover:bg-cta text-white py-2 px-6 rounded-xl text-xl transition duration-200"
          > 
            Solicitar acceso
          </button>
        </form>
        {formState.submitted ? (
  <h3 className="flex flex-col items-center justify-center sm:text-center text-2xl font-bold text-primary-text mb-20 sm:max-w-xs h-20">
    ¡Tus datos fueron enviados! <img
            src="mario_wave.gif"
            className='h-[30px] '
          />
  </h3>
) : null}
      </div>
    );
  };
  



export default Mid