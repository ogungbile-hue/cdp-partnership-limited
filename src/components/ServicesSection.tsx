import { HardHat, Calculator, FileWarning, Briefcase, Gavel } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: "Construction Project Management & Contract Administration",
      desc: "End-to-end oversight ensuring projects are delivered on time, within budget, and to the highest standards.",
      icon: <HardHat size={28} className="text-red-500" />
    },
    {
      title: "Construction Cost Consulting & Value Engineering",
      desc: "Optimizing project costs without sacrificing quality, driving maximum ROI for every development phase.",
      icon: <Calculator size={28} className="text-red-500" />
    },
    {
      title: "Claims and Contract Management",
      desc: "Rigorous contract structuring and defense mechanisms to protect client interests and mitigate exposure.",
      icon: <FileWarning size={28} className="text-red-500" />
    },
    {
      title: "Public-Private Partnership (PPP) Consulting",
      desc: "Strategic advisory for complex infrastructure deals, bridging the gap between public needs and private capital.",
      icon: <Briefcase size={28} className="text-red-500" />
    },
    {
      title: "Forensic Audit & Dispute Resolution",
      desc: "Expert witness and meticulous auditing services to resolve commercial disputes with quantitative precision.",
      icon: <Gavel size={28} className="text-red-500" />
    }
  ];

  return (
    <section 
      id="services"
      className="min-h-screen w-full flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-sm uppercase tracking-wider text-red-500 font-semibold mb-4 drop-shadow-md">
            Our Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-xl leading-tight">
            Expertise That Drives <br className="hidden lg:block" /> Project Excellence.
          </h2>
          <p className="text-white/70 text-lg font-light leading-relaxed mb-8 drop-shadow-md">
            From inception to final handover, our proprietary cost-control frameworks and 
            project delivery methodologies secure your investments against market volatility and execution risks.
          </p>
          <div className="hidden lg:block">
            <button className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-medium rounded transition-colors shadow-xl">
              Request Full Capability Statement
            </button>
          </div>
        </div>

        {/* Right Content - Glassmorphic List / Cards */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {services.map((svc, idx) => (
            <div 
              key={idx}
              className="group flex gap-6 p-6 md:p-8 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-300 rounded-xl"
            >
              <div className="flex-shrink-0 mt-1 p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-red-950/30 group-hover:border-red-500/30 transition-colors">
                {svc.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-white mb-2 tracking-wide drop-shadow-md">
                  {svc.title}
                </h4>
                <p className="text-white/60 font-light leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
