
const Ideal = () => {


    return (
<div className="bg-lavanda flex flex-col items-center sm:h-600 py-28 sm:py-0">
<div className="sm:h-20"></div>
<h2 className="flex flex-col items-center justify-center sm:text-center text-3xl font-bold text-primarytext mb-20 sm:max-w-xs h-16">
        El aliado que buscabas
      </h2>
{/* Image */}

         {/* Image */}
         <div className="md:hidden flex items-center justify-center relative">
  {/* Circle */}
  <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-1/5 
              w-[250px] h-[250px] bg-white rounded-full z-0"></div>
         
  {/* Content image */}
  <div className="relative z-10">
    <img src="ret.png" className="md:hidden object-cover -mt-22 h-[230px] -mx-11" />
  </div>

  <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-1/5 
              w-[250px] h-[250px] border-[11px] border-primary rounded-full z-10"></div>
</div>

    
    <div className="flex justify-center md:space-x-4 sm:flex-col sm:py-16 sm:space-y-2 ">
      <div className="hover:bg-primary hover:text-white shadow-xl rounded-lg w-52 h-16 sm:w-18 sm:h-18  bg-white rounded-md flex flex-col justify-center items-center relative">
        <div className=" font-bold absolute top-3/2  left-1/2 text-2xl  -translate-x-1/2 -translate-y-1/2 -mb-1">
        <h2>24/7</h2> 
        </div>
        <div className="w-full text-center text-xl relative text-normal font-light -mb-6">
          <h2>Acceso gratuito</h2> 
        </div>
      </div>
      <div className="hover:bg-primary hover:text-white shadow-xl rounded-lg w-52 h-16 sm:w-18 sm:h-18  bg-white rounded-md flex flex-col justify-center items-center relative">
        <div className=" absolute font-bold top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2 -mb-1">
        Método 
        </div>
        <div className="w-full text-center text-xl relative text-normal font-light -mb-6">
        <h2>Cognitivo-conductual</h2>
        </div>
      </div>
      <div className="hover:bg-primary hover:text-white shadow-xl rounded-lg w-52 h-16 sm:w-18 sm:h-18  bg-white rounded-md flex flex-col justify-center items-center relative">
        <div className=" absolute font-bold top-3/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2 -mb-1">
        Foco
        </div>
        <div className="w-full text-center text-xl relative text-normal font-light -mb-6">
        <h2>Depresión y ansiedad</h2>
        </div>
      </div>
    </div>

</div>

    );
  };
  



export default Ideal