import { Award, ShieldCheck, CheckCircle, Globe } from 'lucide-react';

export function StatsSection() {
  const metrics = [
    { value: "$100B+", label: "Total Value of Projects Executed" },
    { value: "300+", label: "Successful Projects Completed" },
    { value: "15+", label: "Years in Operation" },
    { value: "95%", label: "Client Retention & Satisfaction" }
  ];

  const frameworks = [
    { name: "RICS", desc: "Royal Institution of Chartered Surveyors", icon: <img src="/rics-1-logo-png-transparent.png" alt="RICS Logo" className="h-8 md:h-10 w-auto object-contain bg-white/10 rounded-sm p-1" /> },
    { name: "NIQS", desc: "Nigerian Institute of Quantity Surveyors", icon: <img src="/niqs-logo.png" alt="NIQS Logo" className="h-8 md:h-10 w-auto object-contain bg-white/10 rounded-sm p-1" /> },
    { name: "QSRBN", desc: "Quantity Surveyors Registration Board of Nigeria", icon: <img src="/QSRBN-LOGO-1.png" alt="QSRBN Logo" className="h-8 md:h-10 w-auto object-contain bg-white/10 rounded-sm p-1" /> },
    { name: "CIArb", desc: "Chartered Institute of Arbitrators", icon: <img src="/ciarb_logo.svg" alt="CIArb Logo" className="h-8 md:h-10 w-auto object-contain bg-white/10 rounded-sm p-1" /> }
  ];

  return (
    <section 
      className="min-h-screen w-full flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-xl">
              Our Legacy Matters.
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/70 font-light leading-relaxed border-l-2 border-red-600 pl-6 drop-shadow-md">
              For over 15 years, CDP Partnership Limited has defined the benchmark for rigorous standard cost controls and project delivery in Nigeria. Our mathematical precision and uncompromising ethical frameworks guarantee that capital is deployed efficiently and assets are delivered flawlessly.
            </p>
          </div>
        </div>

        {/* Middle Row - Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={`p-8 md:p-12 flex flex-col items-center text-center ${
                idx !== metrics.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''
              } ${
                idx === 1 ? 'lg:border-b-0 border-b border-white/10' : ''
              }`}
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                {metric.value}
              </span>
              <span className="text-sm uppercase tracking-widest text-red-500 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Row - Frameworks */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-8 font-mono">
            Professional & Regulatory Compliance Frameworks
          </h4>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {frameworks.map((fw, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-md">
                <div className="text-white/60">
                  {fw.icon}
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold tracking-wider text-white drop-shadow-md">{fw.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
