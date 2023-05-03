import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { MdWhatsapp } from "react-icons/md";

const WhatsappMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola dani!', sender: 'me' },
    { id: 2, text: 'Hola cami 👋, ¿cómo va todo?', sender: 'friend' },
    { id: 3, text: 'Más o menos...', sender: 'me' },
    { id: 4, text: 'Discutí con mi pololo de nuevo', sender: 'me' },
    { id: 5, text: 'Creo que vamos a terminar', sender: 'me' },
    { id: 7, text: 'Lamento mucho escuchar eso.', sender: 'friend' },
    { id: 8, text: 'A veces, hablar sobre lo que está pasando y cómo nos \
            sentimos, puede ayudarnos a procesar nuestras emociones y encontrar \
            soluciones.', sender: 'friend'},        
    { id: 9, text:  '¿Quieres contarme cómo te hace sentir esto?', sender: 'friend' },

            
  ]);


  

  return (<div className="bg-lavanda flex justify-center items-center sm:h-[680px]">
  <div className="relative shadow-xl rounded-b-lg w-[60%] h-[350px]  sm:w-[87%] sm:h-[580px] bg-stone-200 flex flex-col justify-center items-center">
    <div className="absolute bottom-[100%] left-0 bg-gray-300 w-full flex justify-left items-center h-8 rounded-t-lg">
    <div className="absolute bottom-[0%] left-0 bg-gray-100 w-full flex justify-left items-center h-1"></div>

      <div className=" w-3 h-3 rounded-full"></div>
      <div className="bg-red-500 w-3 h-3 rounded-full"></div>
      <div className="bg-yellow-500 mx-2 w-3 h-3 rounded-full"></div>
      <div className="bg-green-500 w-3 h-3 rounded-full"></div>
      
      <div className="px-8 ml-4 flex items-center bg-gray-100 rounded-t rounded-r shadow-l">
      <MdWhatsapp className='text-xl -ml-4 text-green-400' />  
      <div className="mx-2">WhatsApp</div>
  
</div>

    </div>
  
    <div className="w-[85%] sm:w-[90%] " >
      {/* messages */}
      {messages.map(message => (
        <div
          key={message.id}
          className={classNames('flex py-0.5',  {
            'justify-end': message.sender === 'me',
            'justify-start': message.sender !== 'me'
          }, 'items-center')}
        >
          <div className={classNames({
            'bg-white': message.sender !== 'me',
          }, 'sm:max-w-[75%] md:max-w-[80%] rounded-lg px-6 shadow-md \
          bg-green-100 items-center ')}>
            {message.text}
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className='py-20'></div>
</div>


  );
};

export default WhatsappMessages;
