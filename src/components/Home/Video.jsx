import React, { useState } from 'react';
import video from '../../../public/video-landing.mp4';

const VideoWidget = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleVideoClick = () => {
    setIsFullScreen(true);
  };

  const handleFullScreenClose = () => {
    setIsFullScreen(false);
  };

  const [oculto, setOculto] = useState(false);
  
  const handleClick = () => {
    setOculto(true);
  };

  return (
    <div className="sm:hidden fixed z-50 bottom-0 right-0 mb-4 mr-4 ">
      {oculto ? null : (
        <>
          {isFullScreen ? (
            <div className=" w-320 h-320 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden cursor-pointer">
              <video
                src={video}
                autoPlay
                controls
                className="sm:py-0 sm:mb-0 sm:w-[200px] sm:h-[200px] w-[350px] h-[350px] object-cover"
              />
              <button
                onClick={handleFullScreenClose}
                className="absolute top-0 right-2 p-2 shadow-md text-black-500 font-bold text-xl rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (

            <div
              onClick={handleVideoClick}
              className="w-32 h-32 sm:hidden bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden cursor-pointer"
            >
  
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full rounded-full object-cover"
                style={{ objectFit: 'cover' }}
              />
              {isFullScreen ? false : (<div className="absolute bottom-36 sm:bottom-52  bg-lavanda text-black shadow-md px-2 py-1 rounded-lg">
                ¡Hola! Acá <br/>una intro
              </div>)}
            </div>
          )}
          {isFullScreen ? false : (
          <button onClick={handleClick} className="absolute top-0 left-0 
                            text-black-500 text-sm rounded-full bg-gray-200 
                            hover:bg-gray-300 w-6 h-6 shadow-md text-center justify-center
                             items-center flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                           </svg>
                         </button>)}

        </>
      )}
    </div>
  );
  
};

export default VideoWidget;

