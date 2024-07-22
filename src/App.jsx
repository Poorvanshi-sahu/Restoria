
import About from "./components/About";
import Dishes from "./components/Dishes";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";

function App() {

  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
         <Navbar/>
         <HeroSection/>
         <Dishes/>
         <About/>
         <Mission/>
    </main>
  )
}

export default App
