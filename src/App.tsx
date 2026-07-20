import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <BackgroundVideo />
      <Navbar />

      <main 
        id="scroll-container" 
        className="w-full relative z-10"
      >
        <div id="scroll-content" className="w-full flex flex-col">
          <HeroSection />
          <ServicesSection />
          <StatsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
