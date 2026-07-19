import { useState } from 'react';
import { cn } from '../lib/utils';
import { Building2, Home, ShoppingCart, Tractor, Pickaxe, ChevronRight } from 'lucide-react';

export function MarketSectorSection() {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: <Pickaxe size={24} />,
      phase: 'Peak Growth',
      trend: 'up',
      color: 'text-green-400',
      description: 'Massive public capital deployment driving heavy civil works, transport networks, and utility grids across major geopolitical zones.'
    },
    {
      id: 'commercial',
      name: 'Commercial Complexes',
      icon: <Building2 size={24} />,
      phase: 'Mid Growth',
      trend: 'up',
      color: 'text-blue-400',
      description: 'Steady absorption in Grade A office spaces and mixed-use developments, fueled by corporate expansion and foreign direct investment.'
    },
    {
      id: 'residential',
      name: 'Residential Estate',
      icon: <Home size={24} />,
      phase: 'Peak Growth',
      trend: 'up',
      color: 'text-green-400',
      description: 'High demand for premium and middle-income housing enclaves in tier-1 cities, driving rapid suburban expansion.'
    },
    {
      id: 'retail',
      name: 'Retail',
      icon: <ShoppingCart size={24} />,
      phase: 'Trough',
      trend: 'down',
      color: 'text-orange-400',
      description: 'Consolidation phase due to supply chain pressures. Focus shifting to neighborhood centers rather than macro malls.'
    },
    {
      id: 'agro',
      name: 'Agro-Processing',
      icon: <Tractor size={24} />,
      phase: 'Mid Growth',
      trend: 'up',
      color: 'text-blue-400',
      description: 'Emerging industrial investments in agricultural value chains requiring specialized structural and storage facilities.'
    }
  ];

  return (
    <section 
      id="market-intelligence"
      className="min-h-screen w-full flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
          Construction Market Sector Activity Cycle
        </h2>
        <p className="text-lg text-white/70 font-light max-w-3xl mb-16 drop-shadow-md">
          Real-time qualitative intelligence tracking economic growth waves across key Nigerian built sectors.
        </p>

        {/* Interactive Grid/Cycle */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {sectors.map((sector, idx) => (
              <button
                key={sector.id}
                onClick={() => setActiveSector(idx)}
                className={cn(
                  "flex items-center justify-between p-5 rounded-xl border transition-all duration-300 text-left",
                  activeSector === idx 
                    ? "bg-white/10 border-red-500/50 backdrop-blur-md shadow-lg shadow-red-900/10" 
                    : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-black/40 backdrop-blur-sm"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    activeSector === idx ? "bg-red-500/20 text-red-400" : "bg-white/5 text-white/50"
                  )}>
                    {sector.icon}
                  </div>
                  <div>
                    <h4 className={cn("font-medium tracking-wide transition-colors", activeSector === idx ? "text-white" : "text-white/70")}>
                      {sector.name}
                    </h4>
                    <span className="text-xs uppercase tracking-wider text-white/40 mt-1 block font-mono">
                      Sector Focus
                    </span>
                  </div>
                </div>
                <ChevronRight className={cn("transition-transform duration-300", activeSector === idx ? "text-red-500 translate-x-1" : "text-white/20")} />
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7">
            <div className="h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                {sectors[activeSector].icon}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", sectors[activeSector].color)}></span>
                  <span className={cn("relative inline-flex rounded-full h-3 w-3", sectors[activeSector].color)}></span>
                </span>
                <span className={cn("text-sm font-mono uppercase tracking-widest", sectors[activeSector].color)}>
                  {sectors[activeSector].phase} Indicator
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                {sectors[activeSector].name}
              </h3>
              
              <p className="text-xl text-white/80 font-light leading-relaxed">
                {sectors[activeSector].description}
              </p>

              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-widest font-mono block mb-2">Cost Volatility</span>
                  <span className="text-lg text-white font-medium">Medium-High</span>
                </div>
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-widest font-mono block mb-2">Investment Velocity</span>
                  <span className="text-lg text-white font-medium">{sectors[activeSector].trend === 'up' ? 'Accelerating' : 'Decelerating'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full max-w-4xl p-6 md:p-8 bg-red-950/30 border border-red-500/20 rounded-xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <p className="text-white/90 text-sm md:text-base font-light italic leading-relaxed">
            "Have internal mathematical parameters or proprietary data layers? Connect with our desk to calibrate this intelligence simulator for your specific portfolio framework."
          </p>
        </div>

      </div>
    </section>
  );
}
