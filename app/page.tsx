import Hero from "@/sections/home/Hero";
import Philosophy from "@/sections/home/Philosophy";
import Services from "@/sections/home/Services";
import Process from "@/sections/home/Process";
import Clients from "@/sections/home/Clients";
import Benefits from "@/sections/home/Benefits";
import Vision from "@/sections/home/Vision";
import Cta from "@/sections/home/Cta";

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Philosophy />
      <Services />
      <Process />
      <Clients />
      <Benefits />
      <Vision />
      <Cta />
    </div>
  );
};

export default Home;
