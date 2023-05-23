import Header from "../components/Header";
import Footer from "../components/Footer";
import Links from "../components/Links";


function Privacidad() {

  return (
    <div>
      <Header />
      <div className="h-7 sm:h-5"></div>
      <div className="bg-lavanda flex flex-col items-center sm:h-600 py-28 sm:py-0 text-justify">
      <div className="sm:h-20"></div>
      <div className="max-w-[70%]">
        <h1 className="flex flex-col items-left text-3xl font-bold text-primarytext mb-10 sm:max-w-xs h-16">
        Política de privacidad
      </h1>
        <div>
        Última actualización: 04-05-2023
        </div>
        <p className="py-8">
          En <a className="font-bold">daniChat</a>, valoramos y respetamos tu privacidad. Nos tomamos en serio la protección de los datos personales de nuestros usuarios y estamos comprometidos a cumplir con las leyes y regulaciones de protección de datos aplicables. Esta política de privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos los datos personales que nos proporcionas, a través de nuestra landing page y los correos electrónicos que enviamos a nuestros suscriptores.</p>
          <h2 className="flex flex-col items-left  text-3xl font-bold 
          text-primarytext mb-14 sm:max-w-xs h-16 py-12">
              Recopilación de datos personales

                </h2>

                <p className="my-10">
          Recopilamos datos personales de nuestros usuarios a través de nuestro formulario de registro en la landing page y a través de los correos electrónicos que nos envían. Los datos personales que podemos recopilar incluyen:
          <div className="py-4"></div>
          <div className="mx-4 ">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Otra información de contacto, como número de teléfono</li>
            <li>Información de inicio de sesión y atribución de marketing digital</li>
            <li>Información sobre el uso de nuestro sitio web y servicios, como las páginas que visitas y la interacción con las mismas.</li>
            <li>Además, podemos recopilar datos personales automáticamente a través de cookies y otras tecnologías de seguimiento cuando visitas nuestra landing page.</li>
          </div>
          </p>
          <h2 className="flex flex-col items-left justify-left text-3xl
          font-bold text-primarytext mb-10 sm:max-w-xs h-16 mt-20">
            Uso de datos personales


                </h2>
                <p>
          Utilizamos los datos personales que recopilamos para tomar decisiones, mejorar nuestros desarrollos, diseños, marketing y comunicaciones, entendiendo quienes son nuestros usuarios, y que es lo que prefieren. 

          En particular, utilizamos los datos personales para:
          <div className="py-4"></div>
          <div className="mx-4 ">
            <li>Procesar y gestionar tus solicitudes de registro</li>
            <li>Enviar correos electrónicos y otros mensajes de marketing relevantes para ti</li>
            <li>Proporcionar soporte al cliente y responder a tus preguntas</li>
            <li>Analizar y mejorar nuestros servicios y la experiencia del usuario en nuestra landing page</li>
            <li>Detectar y prevenir fraudes y otros usos ilegales de nuestros servicios.</li>
          </div>

          <h2 className="flex flex-col items-left justify-left  text-3xl
          font-bold text-primarytext mb-10 sm:max-w-xs h-16 py-20">
          Divulgación de datos personales
          </h2>
          <p className="">
          No compartimos los datos personales de nuestros usuarios con terceros, a menos que se requiera por ley o por orden judicial.
          </p>
          <h2 className="flex flex-col items-left justify-left  text-3xl
          font-bold text-primarytext mb-10 sm:max-w-xs h-16 mt-20">
          Seguridad de los datos personales
          </h2>

          Tomamos medidas de seguridad técnicas para proteger los datos personales de nuestros usuarios de la pérdida, el acceso no autorizado, la alteración y la divulgación. Además, trabajamos con herramientas de analítica con altos estándares, de proveedores como Twilio.

          <h2 className="flex flex-col items-left justify-left text-3xl
          font-bold text-primarytext mb-10 sm:max-w-xs h-16 mt-20">
          Tus derechos de privacidad
          </h2>
          <p>
          Tienes ciertos derechos en relación con tus datos personales, cuando navegas por internet, que incluyen el derecho a acceder, rectificar y eliminar los datos que tenemos sobre ti. Si deseas ejercer alguno de estos derechos, contáctanos.
          </p>
          <h2 className="flex flex-col items-left justify-left  text-3xl
          font-bold text-primarytext mb-10 sm:max-w-xs h-16 mt-20">Cambios en esta política de privacidad</h2>
          <p className="sm:mb-44 md:mb-14 sm:mt-20">

          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio importante se publicará en nuestra landing page y se te notificará por correo electrónico. Te recomendamos que revises esta política de privacidad regularmente para mantenerte informado sobre cómo protegemos tu privacidad.
          Si tienes preguntas o comentarios sobre esta política de privacidad o cómo procesamos tus datos personales, contáctanos a través de emiliano@dani.chat o formulario de contacto.
          </p>
        </p>
      </div>
      </div>
      



      <Links />
      <Footer />
    </div>
    
  )
}


export default Privacidad
