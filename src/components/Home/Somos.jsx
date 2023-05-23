import  {useState} from "react";


const Somos = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implementar la validación de correo electrónico y número de teléfono aquí
      console.log('Formulario enviado');
    };
  
    return (
      <div id="Somos" className="bg-lavanda flex flex-col items-center py-20">
        <h3 className="flex flex-col items-center justify-center text-3xl font-bold text-primarytext mb-20 sm:max-w-xs h-16 ">
          ¿Quienes somos?
        </h3>
        <div className='sm:justify-center text-center  md:max-w-[50%] mb-20'>
                            Somos un equipo de ingenieros chilenos, 
                            buscando ayudar a personas, a través de los avances más recientes
                             en el campo de la Inteligencia Artificial y <a href='https://arxiv.org/abs/2304.03442' 
                                        target="_blank" 
                                        className='font-semibold'>Agentes Generativos</a>.</div>
        <div className='sm:w-[70%] mb-12 sm:justify-center text-center leading-[1.5rem]'>
            ¿Quieres colaborar?<br/>
         ¡Deja tus datos en el formulario!</div>
      </div>
    );
  };
  



export default Somos