import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  Rocket, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Heart,
  Briefcase,
  Layout
} from 'lucide-react';

// --- Custom Components ---

const Logo = ({ size = "w-10 h-10" }: { size?: string }) => (
  <div className={`${size} relative rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br from-purple-900 via-pink-600 to-pink-400 p-[2px]`}>
    <div className="bg-[#2d1b33] w-full h-full rounded-full flex items-center justify-center overflow-hidden relative">
      {/* Stylized Logo Emblem mimicking the uploaded image */}
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
        {/* Background circular border */}
        <circle cx="50" cy="50" r="44" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.5" />
        <circle cx="50" cy="50" r="40" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.3" />
        
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
        </defs>

        {/* Profile Silhouette */}
        <path 
          d="M42 38 C40 38 38 40 38 43 C38 46 41 49 42 51 C43 53 42 56 42 56 C42 56 46 53 47 50 C48 47 47 43 45 40 C44 38 43 38 42 38 Z" 
          fill="url(#logoGradient)" 
        />
        
        {/* Flowing 'L' / Wave Shape */}
        <path 
          d="M50 25 C65 25 75 45 50 75 L65 75" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          opacity="0.9"
        />
        <path 
          d="M48 22 C68 22 80 45 48 78 L62 78" 
          stroke="url(#logoGradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          opacity="0.4"
        />
      </svg>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Social Impact', href: '#impact' },
    { name: 'USP', href: '#usp' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'glass-pink py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
            <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-pink-600' : 'text-pink-700'}`}>
              SheLeads <span className="text-pink-400">Growth</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-pink-900 hover:text-pink-500 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-pink-600 focus:outline-none p-2 rounded-lg bg-pink-100/50"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-pink fixed inset-x-0 top-[4.5rem] p-4 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl border-t border-pink-100">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-4 text-lg font-bold text-pink-900 border-b border-pink-100 last:border-0 hover:bg-pink-100/50 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children?: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 space-y-4 px-4">
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${light ? 'text-white' : 'text-pink-900'}`}>
      {children}
    </h2>
    {subtitle && (
      <div className="w-24 h-1.5 hot-pink-gradient mx-auto rounded-full mt-4"></div>
    )}
    <p className={`text-lg md:text-xl max-w-2xl mx-auto font-medium ${light ? 'text-pink-100' : 'text-pink-600'}`}>
      {subtitle}
    </p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-14 h-14 hot-pink-gradient rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-pink-900 mb-3">{title}</h3>
    <p className="text-pink-700 leading-relaxed font-medium">{description}</p>
  </div>
);

const StatsBox = ({ number, label }: { number: string, label: string }) => (
  <div className="text-center p-4 md:p-6 bg-pink-100/40 rounded-3xl border border-pink-200 backdrop-blur-sm shadow-sm flex flex-col justify-center items-center h-full">
    <div className="text-2xl md:text-4xl font-black text-pink-600 mb-1">{number}</div>
    <div className="text-[10px] md:text-xs font-bold text-pink-800 uppercase tracking-widest text-center">{label}</div>
  </div>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-pink-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
            alt="Women in Tech" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-600/70 to-pink-900/40"></div>
          {/* Animated Circles */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-300/30 rounded-full blur-[80px] animate-bounce duration-[10000ms]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto md:mx-0">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-pink border border-pink-200/30 mb-8 animate-bounce">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-pink-600 text-xs md:text-sm font-bold uppercase tracking-wider">Pakistan's 1st Women-Only Growth Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
              Women in leadership deserve the <span className="text-pink-300">spotlight.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-pink-50 font-medium mb-10 leading-relaxed max-w-2xl drop-shadow-md">
              We empower women founders and tech leaders with data-driven marketing while creating remote digital work for girls across underserved regions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact" 
                className="px-8 md:px-10 py-5 hot-pink-gradient text-white rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 text-center"
              >
                Grow My Business <ArrowRight size={20} />
              </a>
              <a 
                href="#impact" 
                className="px-8 md:px-10 py-5 bg-white text-pink-600 rounded-full text-lg font-bold shadow-xl hover:bg-pink-100 transition-all border border-pink-100 text-center"
              >
                Our Social Impact
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              <StatsBox number="100%" label="Remote" />
              <StatsBox number="5" label="Founders" />
              <StatsBox number="50k+" label="PKR Entry" />
              <StatsBox number="Global" label="Reach" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="SheLeads Growth is a movement founded by 5 visionary university students.">
            Empower. Grow. Lead.
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative mb-12 md:mb-0">
              <div className="absolute -top-6 -left-6 w-full h-full bg-pink-200 rounded-3xl -z-10 rotate-3 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Women Team Collaboration" 
                className="rounded-3xl shadow-2xl w-full aspect-video md:aspect-auto md:h-[500px] object-cover -rotate-2"
              />
              <div className="absolute -bottom-8 -right-4 md:-right-8 glass-pink p-5 md:p-8 rounded-3xl shadow-xl max-w-[180px] md:max-w-xs border-2 border-pink-200 z-20">
                <Heart className="text-pink-500 mb-2" fill="currentColor" size={32} />
                <p className="text-pink-900 font-bold text-sm md:text-lg italic">"Built by women, for women leaders worldwide."</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-pink-900 tracking-tight">Our Executive Summary</h3>
                <p className="text-pink-800 text-lg leading-relaxed font-medium">
                  We are a women-led digital marketing agency with a shared mission: to empower women in tech and leadership by helping them grow their visibility, leads, and businesses—while simultaneously creating paid digital work opportunities for women across Pakistan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-pink-600 font-black text-xl mb-2 flex items-center gap-2"><Target size={20} /> Mission</h4>
                  <p className="text-pink-800 text-sm font-semibold leading-relaxed">To amplify women-led brands through ethical, data-driven marketing.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-pink-600 font-black text-xl mb-2 flex items-center gap-2"><Globe size={20} /> Vision</h4>
                  <p className="text-pink-800 text-sm font-semibold leading-relaxed">To become Pakistan’s leading women-only growth agency global example.</p>
                </div>
              </div>

              {/* Pink Card Advantage with Pop Hover Effect */}
              <div className="bg-pink-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group hover:scale-[1.04] hover:-translate-y-1 transition-all duration-300 cursor-default border border-pink-700/30">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-500 group-hover:scale-150 pointer-events-none">
                  <Award size={140} />
                </div>
                <h4 className="text-2xl font-black mb-4 text-pink-300 italic flex items-center gap-3">
                  The "Pink Card Advantage"
                  <Rocket className="animate-pulse text-pink-400" size={24} />
                </h4>
                <p className="text-pink-100 leading-relaxed font-semibold relative z-10 text-lg">
                  Our women-only service model creates a strong brand signal of trust, representation, and empowerment. Clients choose us because we stand for excellence in women's leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-pink-50 relative overflow-hidden border-t border-pink-100">
        <div className="absolute top-0 right-0 w-64 h-64 hot-pink-gradient rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading subtitle="Specialized growth services tailored for women founders and leaders.">
            Our Client Services
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={Users}
              title="Lead Generation"
              description="LinkedIn lead gen, email outreach, and CRM-based lead nurturing to fill your pipeline with high-quality prospects."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Paid Advertising"
              description="Expert Meta and Google Ads strategies designed to maximize ROI for women-led startups and consulting businesses."
            />
            <FeatureCard 
              icon={Rocket}
              title="SEO Services"
              description="On-page, local, and international SEO combined with content optimization to ensure your brand shines in search."
            />
            <FeatureCard 
              icon={Layout}
              title="Social Media"
              description="Content strategy for Instagram and LinkedIn focused on community building, engagement, and authority."
            />
          </div>
          
          <div className="mt-16 text-center space-y-4">
            <p className="text-pink-600 font-black text-sm uppercase tracking-widest italic animate-pulse">Coming Soon: AI-Powered Marketing Automation & Advanced Funnels</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-black text-pink-700 hover:text-pink-500 group transition-all text-xl"
            >
              Explore our full service menu <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-pink-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-600 rounded-[3rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-3xl">
            {/* Animated background decoration */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <div className="md:w-1/2 space-y-8 relative z-10">
              <span className="inline-block px-4 py-1 bg-pink-400/50 backdrop-blur-sm rounded-full text-xs font-black tracking-widest uppercase border border-pink-300/30">The Movement</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">Empowering Underserved Regions</h2>
              <p className="text-xl text-pink-100 font-semibold leading-relaxed">
                We train girls from Punjab and Gilgit-Baltistan who are restricted from working outside their homes. We provide training, mentorship, and equipment to help them build remote digital careers.
              </p>
              <div className="space-y-4">
                {[
                  "Laptops & Internet Access provided where needed",
                  "Structured Online & Onsite Training Modules",
                  "Internship-to-paid placement pathway",
                  "Client communication & professional ethics training"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-bold text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 relative z-10 w-full">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Women Empowerment Training" 
                  className="rounded-3xl h-48 md:h-64 lg:h-80 w-full object-cover shadow-lg hover:scale-[1.03] transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Digital Marketing Mentorship" 
                  className="rounded-3xl h-48 md:h-64 lg:h-80 w-full object-cover mt-4 md:mt-12 shadow-lg hover:scale-[1.03] transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage / USP */}
      <section id="usp" className="py-24 bg-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Why SheLeads Growth is different from traditional agencies.">
            The SheLeads Edge
          </SectionHeading>

          <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100 min-w-[600px]">
              <thead className="hot-pink-gradient text-white">
                <tr>
                  <th className="p-6 md:p-8 text-lg md:text-xl font-black uppercase tracking-wider">Factor</th>
                  <th className="p-6 md:p-8 text-lg md:text-xl font-black uppercase tracking-wider">Traditional Agencies</th>
                  <th className="p-6 md:p-8 text-lg md:text-xl font-black uppercase tracking-wider bg-pink-800/20">SheLeads Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {[
                  { factor: "Women-only focus", traditional: "No", sheleads: "Yes" },
                  { factor: "Social Impact", traditional: "Low", sheleads: "High" },
                  { factor: "Remote Inclusion", traditional: "Limited", sheleads: "Strong" },
                  { factor: "Trust & Relatability", traditional: "Medium", sheleads: "Very High" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-pink-50/50 transition-colors">
                    <td className="p-6 md:p-8 font-black text-pink-900">{row.factor}</td>
                    <td className="p-6 md:p-8 font-semibold text-pink-400">{row.traditional}</td>
                    <td className="p-6 md:p-8 font-black text-pink-600 bg-pink-100/30">{row.sheleads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="py-24 bg-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Globe className="w-[800px] h-[800px] absolute -right-40 -bottom-40 text-pink-300" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">Serving the Global & Local Market</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 shrink-0 bg-pink-600 rounded-2xl flex items-center justify-center group-hover:bg-pink-500 transition-colors shadow-lg">
                    <Globe size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Primary Market (International)</h4>
                    <p className="text-pink-100 text-lg leading-relaxed font-semibold">Women-led startups, SaaS founders, and coaching businesses in USA, UK, Singapore, and Australia.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 shrink-0 bg-pink-600 rounded-2xl flex items-center justify-center group-hover:bg-pink-500 transition-colors shadow-lg">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Secondary Market (Regional)</h4>
                    <p className="text-pink-100 text-lg leading-relaxed font-semibold">Pakistani women-led startups, NGOs, and female entrepreneurs seeking affordable, expert growth services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-800/60 backdrop-blur-md p-8 md:p-10 lg:p-12 rounded-[2.5rem] border border-pink-700/50 shadow-3xl">
              <h3 className="text-3xl font-black mb-8 text-center md:text-left">Estimated Pricing</h3>
              <div className="space-y-6">
                {[
                  { service: "Lead Generation", price: "PKR 50k–80k /mo" },
                  { service: "Ads Management", price: "PKR 60k–100k /mo" },
                  { service: "SEO Packages", price: "PKR 40k–70k /mo" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-pink-700/50 pb-4 last:border-0">
                    <span className="text-xl font-bold mb-1 sm:mb-0">{item.service}</span>
                    <span className="text-pink-300 font-black text-xl whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-pink-400 text-sm font-bold uppercase tracking-widest text-center italic">* Customized quotes available for enterprise-level growth campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <SectionHeading subtitle="Ready to shine? Let's discuss your growth strategy.">
                Get in Touch
              </SectionHeading>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-pink-900 group p-4 bg-white rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                    <Monitor size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-black">100% Remote-First Operations</span>
                </div>
                <div className="flex items-center gap-4 text-pink-900 group p-4 bg-white rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                    <Briefcase size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-black">Client Onboarding in Progress</span>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-white rounded-[2rem] border-2 border-dashed border-pink-200 shadow-xl">
                <h4 className="text-2xl font-black text-pink-900 mb-6">Why Partner With Us?</h4>
                <ul className="space-y-5">
                  {[
                    "Ethical & Transparent Marketing",
                    "Data-Driven Growth Strategies",
                    "A Workforce That Represents Your Vision",
                    "Social Impact In Every Campaign"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 font-bold text-pink-700">
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span className="text-lg">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-pink p-8 md:p-12 rounded-[3.5rem] border border-pink-200 shadow-3xl relative mt-8 lg:mt-0">
              <div className="absolute -top-10 -right-10 w-40 h-40 hot-pink-gradient rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
              {submitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-pink-900">Message Received!</h3>
                  <p className="text-pink-600 font-bold text-lg">One of our founders will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-pink-100 text-pink-600 font-black rounded-full hover:bg-pink-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-pink-900 font-black text-sm uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-pink-100 focus:border-pink-500 focus:outline-none transition-all font-semibold bg-white/50"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-pink-900 font-black text-sm uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@company.com"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-pink-100 focus:border-pink-500 focus:outline-none transition-all font-semibold bg-white/50"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-pink-900 font-black text-sm uppercase tracking-widest mb-2">Your Business Goal</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Tell us about your brand..."
                      className="w-full px-6 py-4 rounded-2xl border-2 border-pink-100 focus:border-pink-500 focus:outline-none transition-all font-semibold bg-white/50"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-5 hot-pink-gradient text-white rounded-2xl text-xl font-black shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100/50 pt-24 pb-12 border-t border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo />
                <span className="text-3xl font-extrabold tracking-tight text-pink-600">
                  SheLeads <span className="text-pink-400 font-black">Growth</span>
                </span>
              </div>
              <p className="text-pink-700 text-xl font-semibold leading-relaxed max-w-sm italic">
                "Women in leadership deserve the spotlight—and we help them shine."
              </p>
              <div className="flex items-center space-x-5">
                <a href="https://www.instagram.com/she.leadsgrowth/" target="_blank" className="p-3.5 bg-white shadow-md rounded-2xl text-pink-500 hover:text-pink-700 hover:-translate-y-1.5 transition-all">
                  <Instagram size={30} />
                </a>
                <a href="http://linkedin.com/company/sheleads-growth/?viewAsMember=true" target="_blank" className="p-3.5 bg-white shadow-md rounded-2xl text-pink-500 hover:text-pink-700 hover:-translate-y-1.5 transition-all">
                  <Linkedin size={30} />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-pink-900 font-black text-xl uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4 font-bold text-pink-700">
                <li><a href="#about" className="hover:text-pink-500 transition-colors flex items-center gap-2 group"><ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> About Us</a></li>
                <li><a href="#services" className="hover:text-pink-500 transition-colors flex items-center gap-2 group"><ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> Client Services</a></li>
                <li><a href="#impact" className="hover:text-pink-500 transition-colors flex items-center gap-2 group"><ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> Social Impact</a></li>
                <li><a href="#contact" className="hover:text-pink-500 transition-colors flex items-center gap-2 group"><ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> Work With Us</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-pink-900 font-black text-xl uppercase tracking-widest">Impact Areas</h4>
              <ul className="space-y-4 font-bold text-pink-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div> Gilgit-Baltistan</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div> Punjab Regions</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div> Remote Training</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div> Digital Literacy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-pink-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-pink-600 font-bold text-sm">
              &copy; {new Date().getFullYear()} SheLeads Growth. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm font-black text-pink-400 uppercase tracking-widest">
              <a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper component for MapPin
const MapPin = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default App;