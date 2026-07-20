import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section 
      id="executive-team"
      className="min-h-screen w-full flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Profile */}
        <div className="flex flex-col">
          <div className="mb-12">
            <h3 className="text-sm uppercase tracking-wider text-red-500 font-semibold mb-4 drop-shadow-md">
              Executive Leadership
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-xl leading-tight">
              Guided by Decades <br /> of Infrastructure Excellence.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-md relative overflow-hidden">
             {/* Abstract background shape */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-900/20 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="w-24 h-24 shrink-0 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden relative shadow-2xl flex items-center justify-center">
                {/* Fallback avatar if no image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/30 font-bold text-3xl">
                  AAS
                </div>
                <img src="/assets/team/aminu-suleiman.jpg" alt="Aminu Abubakar Suleiman" className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-500" onLoad={(e) => e.currentTarget.style.opacity = '1'} onError={(e) => e.currentTarget.style.display = 'none'} />
             </div>
             
             <div className="flex flex-col relative z-10">
                <h4 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Aminu Abubakar Suleiman</h4>
                <span className="text-red-400 font-medium tracking-wide mb-4 text-sm">Principal Partner</span>
                <p className="text-white/70 font-light leading-relaxed">
                  Oxford & RICS alumnus and founding partner with 25+ years of strategic oversight tracking major airport, civic, and commercial infrastructure delivery assets across West Africa.
                </p>
             </div>
          </div>
        </div>

        {/* Right Column - Form & Contact Info */}
        <div className="flex flex-col gap-12">
          
          {/* Form */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500 rounded-t-2xl"></div>
             <h4 className="text-2xl font-semibold text-white mb-6 tracking-wide">Request Consultation</h4>
             
             <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Corporate Email" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Project Scope / Sector" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                />
                <textarea 
                  placeholder="Message or Inquiry Details" 
                  rows={4}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors resize-none"
                ></textarea>
                <button 
                  type="button"
                  className="bg-red-700 hover:bg-red-600 text-white font-medium rounded-lg px-6 py-4 flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  Submit Inquiry <ArrowRight size={18} />
                </button>
             </form>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="connect">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white mb-1">Abuja Headquarters</span>
                  <span className="font-light text-sm">Jabi District,<br/>FCT Abuja, Nigeria</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white mb-1">Kaduna Office</span>
                  <span className="font-light text-sm">Kaduna State,<br/>Nigeria</span>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-6 mt-4 pt-6 border-t border-white/10">
               <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone size={18} className="text-red-500" />
                  <span className="font-mono text-sm tracking-widest">+234 (0) 800 CDP PROJ</span>
               </a>
               <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail size={18} className="text-red-500" />
                  <span className="font-mono text-sm tracking-widest">consult@cdppartnership.com</span>
               </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
