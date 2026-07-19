import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { MarketSectorSection } from './components/MarketSectorSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <BackgroundVideo />
      <Navbar />

      <main 
        id="scroll-container" 
        className="w-full relative z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
        }}
      >
        <div id="scroll-content" className="w-full flex flex-col">
          <HeroSection />
          <ServicesSection />
          <MarketSectorSection />
          <StatsSection />
          <ContactSection />
          <div className="h-[50vh] shrink-0 pointer-events-none" />
        </div>
      </main>
    </div>
  );
}
