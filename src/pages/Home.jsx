import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import Mid from "../components/Home/Mid";
import Somos from "../components/Home/Somos";
import Ideal from "../components/Home/Ideal";
import Links from "../components/Home/Links";
import HablarConDaniEs from "../components/Home/HablarConDaniEs";
import WhatsappMessages from "../components/Home/WhatsApp";
import VideoWidget from "../components/Home/Video";



function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Ideal />
      <VideoWidget />
      <WhatsappMessages />
      <HablarConDaniEs />
      <Mid />
      <Somos />
      <Links />
      <Footer />
    </div>
    
  )
}

export default Home
