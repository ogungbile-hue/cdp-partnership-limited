import { LayoutGrid } from 'lucide-react';

export function HeroSection() {
  return (
    <section 
      id="overview" 
      className="h-screen w-full flex flex-col items-center justify-center relative px-6 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-sm md:text-base uppercase tracking-[0.25em] text-red-500 font-semibold mb-6 drop-shadow-md">
          CDP Partnership Limited
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 drop-shadow-2xl leading-tight">
          Cost Efficiency Meets <br className="hidden md:block" /> Quality Assurance.
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-12 drop-shadow-xl">
          Nigeria's premier Project Managers, Procurement, and Construction Cost Consultancy since 2008.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded transition-colors shadow-xl w-full sm:w-auto">
            Explore Services
          </button>
          
          <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded transition-all shadow-xl w-full sm:w-auto">
            <LayoutGrid size={20} className="text-white/70" />
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
