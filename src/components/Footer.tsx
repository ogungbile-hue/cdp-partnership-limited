export function Footer() {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-xl text-white pt-10 pb-6 px-6 md:px-12 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 tracking-tight drop-shadow-md">
              Committed to Excellence in<br />
              Construction Cost Management
            </h2>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl">
              Delivering cost-effective solutions and expert consultancy to ensure project success. Partner with us for reliable, professional services tailored to your needs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src="/cdp-logo.png" alt="CDP Partnership Large Logo" className="w-32 md:w-48 h-auto opacity-90 object-contain drop-shadow-lg" />
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-8">
          <div>
            <h3 className="font-semibold text-base mb-3 tracking-wide text-white">About the Firm</h3>
            <p className="text-white/60 leading-relaxed text-xs md:text-sm">
              Founded in 2008, CDP Partnership Ltd is one of the fastest growing Quantity Surveying and Project Management companies in Nigeria. It's a privately held Nigerian limited liability company with business competence in project management, Public Private Partnership (PPP), Dispute Resolution, Claims Management, Facility Management and Training.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-3 tracking-wide text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-xs md:text-sm text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-3 tracking-wide text-white">Contact Us</h3>
            <div className="flex flex-col gap-3 text-xs md:text-sm text-white/60">
              <p><span className="font-medium text-white/80">Email:</span> cdppartnershipltd@gmail.com</p>
              <p><span className="font-medium text-white/80">Phone:</span> +234 803 203 0128, +234 803 314 5953</p>
              <div>
                <span className="font-medium text-white/80 block mb-1">Address:</span>
                <p className="mb-1 leading-relaxed">ABUJA: 2 Bilyamin Street, Off Ebitu Ukiwe Street, Jabi, Abuja.</p>
                <p className="leading-relaxed">KADUNA: 3 Borno Road Marafa, Off Independence Way, Kaduna State</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-white/40">
          <p>© 2026 CDPPL. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
