import React, { useState, useEffect } from "react";

const HablarConDaniEs = () => {
  const [currentText, setCurrentText] = useState(0);

  const textArray = [
    "retiene el contexto y recuerda los detalles.",
    "es asertivo, entiende tus emociones.",
    "planifica la terapia.",
    "es metódico.",
    "siempre te acompaña en tu bolsillo."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-lavanda h-[200px] py-20 text-center text-xl justify-center">
         <a className="font-bold"> Dani</a> <a className="italic">{textArray[currentText]} </a>
    </div>
  );
};

export default HablarConDaniEs;
