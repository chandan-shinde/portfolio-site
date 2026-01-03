import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink, Code, Database, Server, Terminal, Shield, Cpu, ChevronDown, ChevronUp, Settings, X, Palette, Menu } from 'lucide-react';

import profileImg from './assets/chandan-1.jpg'; 


/* -------------------------------------------------------------------------- */
/* ROBUST THEME SYSTEM (Prevents Tailwind Purge Bugs)                         */
/* -------------------------------------------------------------------------- */

const THEME_STYLES = {
  vice: {
    id: 'vice',
    name: 'Vice City',
    // Base Colors
    bg: 'bg-slate-950',
    selection: 'selection:bg-pink-500',
    
    // Text Colors
    textPrimary: 'text-pink-500',
    textSecondary: 'text-cyan-400',
    textHighlight: 'text-pink-400', 
    
    // Borders
    borderPrimary: 'border-pink-500',
    borderSecondary: 'border-cyan-500',
    borderSecondaryDim: 'border-cyan-500/50',
    
    // Backgrounds
    bgPrimary: 'bg-pink-500',
    bgSecondary: 'bg-cyan-500',
    
    // Gradients & complex components
    gradientText: 'from-pink-500 via-purple-500 to-cyan-500',
    heroButton: 'from-pink-600 to-purple-600',
    
    // Hover States
    hoverTextPrimary: 'group-hover:text-pink-500',
    hoverBorderPrimary: 'hover:border-pink-500',
    hoverBorderSecondary: 'hover:border-cyan-400',
    hoverBgPrimary: 'group-hover:bg-pink-500',
    hoverBgSecondary: 'hover:bg-cyan-950/30',
    
    // Navigation
    navHover: 'hover:text-pink-400',
    navActive: 'text-cyan-400 border-cyan-400',
    
    // Background Blobs
    blobPrimary: 'bg-pink-900/30',
    blobSecondary: 'bg-cyan-900/40',
    blobAccent: 'from-purple-900/40',
    
    // Connect Section Buttons
    socialBgPrimary: 'bg-pink-600',
    socialBgSecondary: 'bg-cyan-600',
    socialBgAccent: 'bg-purple-600',
    
    // Spotlight (JS only)
    spotlight: 'rgba(236, 72, 153, 1)'
  },
  gold: {
    id: 'gold',
    name: 'Executive Gold',
    bg: 'bg-slate-950',
    selection: 'selection:bg-amber-500',
    textPrimary: 'text-amber-500',
    textSecondary: 'text-blue-400',
    textHighlight: 'text-amber-400',
    borderPrimary: 'border-amber-500',
    borderSecondary: 'border-blue-500',
    borderSecondaryDim: 'border-blue-500/50',
    bgPrimary: 'bg-amber-500',
    bgSecondary: 'bg-blue-500',
    gradientText: 'from-amber-400 via-yellow-500 to-blue-600',
    heroButton: 'from-amber-600 to-yellow-600',
    hoverTextPrimary: 'group-hover:text-amber-500',
    hoverBorderPrimary: 'hover:border-amber-500',
    hoverBorderSecondary: 'hover:border-blue-400',
    hoverBgPrimary: 'group-hover:bg-amber-500',
    hoverBgSecondary: 'hover:bg-blue-950/30',
    navHover: 'hover:text-amber-400',
    navActive: 'text-blue-400 border-blue-400',
    blobPrimary: 'bg-amber-900/30',
    blobSecondary: 'bg-blue-900/40',
    blobAccent: 'from-indigo-900/40',
    socialBgPrimary: 'bg-amber-600',
    socialBgSecondary: 'bg-blue-600',
    socialBgAccent: 'bg-indigo-600',
    spotlight: 'rgba(245, 158, 11, 1)'
  },
  fire: {
    id: 'fire',
    name: 'Obsidian Fire',
    bg: 'bg-neutral-950',
    selection: 'selection:bg-red-600',
    textPrimary: 'text-red-500',
    textSecondary: 'text-slate-400',
    textHighlight: 'text-red-400',
    borderPrimary: 'border-red-500',
    borderSecondary: 'border-slate-500',
    borderSecondaryDim: 'border-slate-500/50',
    bgPrimary: 'bg-red-500',
    bgSecondary: 'bg-slate-500',
    gradientText: 'from-red-600 via-orange-500 to-slate-200',
    heroButton: 'from-red-600 to-orange-600',
    hoverTextPrimary: 'group-hover:text-red-500',
    hoverBorderPrimary: 'hover:border-red-500',
    hoverBorderSecondary: 'hover:border-slate-400',
    hoverBgPrimary: 'group-hover:bg-red-500',
    hoverBgSecondary: 'hover:bg-slate-800/30',
    navHover: 'hover:text-red-400',
    navActive: 'text-slate-200 border-slate-200',
    blobPrimary: 'bg-red-900/30',
    blobSecondary: 'bg-slate-800/40',
    blobAccent: 'from-orange-900/40',
    socialBgPrimary: 'bg-red-600',
    socialBgSecondary: 'bg-slate-600',
    socialBgAccent: 'bg-orange-600',
    spotlight: 'rgba(220, 38, 38, 1)'
  },
  ocean: {
    id: 'ocean',
    name: 'Deep Ocean',
    bg: 'bg-slate-900',
    selection: 'selection:bg-teal-500',
    textPrimary: 'text-teal-500',
    textSecondary: 'text-sky-400',
    textHighlight: 'text-teal-400',
    borderPrimary: 'border-teal-500',
    borderSecondary: 'border-sky-500',
    borderSecondaryDim: 'border-sky-500/50',
    bgPrimary: 'bg-teal-500',
    bgSecondary: 'bg-sky-500',
    gradientText: 'from-teal-400 via-sky-500 to-indigo-500',
    heroButton: 'from-teal-600 to-indigo-600',
    hoverTextPrimary: 'group-hover:text-teal-500',
    hoverBorderPrimary: 'hover:border-teal-500',
    hoverBorderSecondary: 'hover:border-sky-400',
    hoverBgPrimary: 'group-hover:bg-teal-500',
    hoverBgSecondary: 'hover:bg-sky-950/30',
    navHover: 'hover:text-teal-400',
    navActive: 'text-sky-400 border-sky-400',
    blobPrimary: 'bg-teal-900/30',
    blobSecondary: 'bg-sky-900/40',
    blobAccent: 'from-indigo-900/40',
    socialBgPrimary: 'bg-teal-600',
    socialBgSecondary: 'bg-sky-600',
    socialBgAccent: 'bg-indigo-600',
    spotlight: 'rgba(20, 184, 166, 1)'
  }
};

/* -------------------------------------------------------------------------- */
/* CONTENT MANAGEMENT SYSTEM (CMS)                                            */
/* -------------------------------------------------------------------------- */
const PORTFOLIO_DATA = {
  personal: {
    name: "Chandan Shinde",
    initials: "CS",
    location: "Pune, IN",
    estYear: "2021",
    role: "Senior Software Engineer",
    careerStartDate: "2021-08-01", 
    tagline: "The Tech Guy", 
    vision: "Architecting the future of humanity through robust, scalable Engineering technology.",
    email: "noreply@chandanshinde.com",
    linkedin: "https://linkedin.com/in/chandan-shinde", 
    qwiklabs: "https://www.skills.google/public_profiles/ac548436-57f3-46da-9486-1bbfd808f1f8",
    profileImage: profileImg 
  },
  
  about: {
    title: "Who Am I?",
    intro: "I'm a seasoned Software Engineer with hardcore experience in designing and developing robust solutions with focus on measurable outcomes — faster APIs, safer systems, and less friction for users.",
    description: "My work spans across Java Springboot Development, SaaS migrations, Test Automation, JVM & SQL performance tuning, and security hardening. I don't just write software; I architect systems that scale.",
    visionQuote: "To forge a better future for humanity through the limitless power of code and innovation."
  },

  skills: {
    sectionTitle: "Tech Loadout",
    subtitle: "My suite of technologies tailored for building enterprise-grade applications.",
    categories: [
      {
        title: "Core Development",
        iconType: "Code",
        colorKey: "primary",
        items: ["Java (8-21)", "Spring Boot", "Python", "SQL"]
      },
      {
        title: "Data & Storage",
        iconType: "Database",
        colorKey: "secondary",
        items: ["SQL Server", "JPA / Hibernate", "Query Optimization"]
      },
      {
        title: "Architecture",
        iconType: "Server",
        colorKey: "accent",
        items: ["Microservices", "REST API", "JVM", "Web Security"]
      },
      {
        title: "DevOps & Tools",
        iconType: "Terminal",
        colorKey: "gray",
        items: ["CI/CD", "Git & Maven", "Junit / Mockito", "Docker / Azure"]
      }
    ]
  },

  experience: [
    {
      role: "Software Engineer - BA4",
      company: "Barclays",
      period: "08/2024 - Present",
      points: [
        "Enabled SaaS migration of £60B+ AUM platform, cutting maintenance costs by 40%.",
        "Improved API response by 40% (500ms to 300ms) via Spring Boot caching & JVM tuning.",
        "Reduced trade reporting delays by 50% building a custom multi-threaded Java adapter for bulk trade export.",
        "Engineered low-latency OMS POC in Spring Boot with FIX integration, achieving sub-100ms response.",
        "Led monthly sprint releases achieving 100% deployment success rate."
      ],
      techStack: ["Java", "Spring Boot", "Azure", "Optimization"],
      isCurrent: true
    },
    {
      role: "Software Engineer - BA3",
      company: "Barclays",
      period: "08/2021 - 08/2024",
      points: [
        "Automated trade booking by engineering a Java-based custom solution, cutting trade execution time by 90%.",
        "Implemented Single Sign-On (SSO) reducing login errors by 80% and enhancing security.",
        "Refactored SQL procedures cutting report generation from 2 mins to 30s.",
        "Modernized test automation (Junit/Mockito/Cucumber) increasing coverage by 60%.",
        "Accelerated data onboarding by 50% with a Python/Pandas validation framework.",
        "Remediated 20+ CVEs and redesigned auth flows, reducing security flags by 60%."
      ],
      techStack: ["Spring Security", "SQL", "Test Automation", "Python"],
      isCurrent: false
    },
    {
      role: "Software Engineer Intern",
      company: "Barclays",
      period: "06/2020 - 07/2020",
      points: [
        "Built internal video streaming app with ElasticSearch delivering sub-3s lookup times.",
        "Spearheaded CI/CD pipelines (Jenkins) reducing deployment cycles by 50%.",
        "Devised Selenium test suite cutting manual testing effort by 70%."
      ],
      techStack: ["Elasticsearch", "Jenkins", "Java", "CI/CD"],
      isCurrent: false
    }
  ],

  education: [
    {
      school: "VJTI Mumbai",
      degree: "BTech, Computer Engineering",
      grade: "8.68/10 CGPA",
      year: "2018 - 2021"
    },
    {
      school: "VPM's Polytechnic Thane",
      degree: "Diploma in Computer Engineering",
      grade: "90.81%",
      year: "2015 - 2018"
    }
  ],

  achievements: [
    {
      rank: "01",
      title: "2x Certificate of Recognition",
      description: "Barclays - Outstanding Technical Contributions"
    },
    {
      rank: "02",
      title: "1st Place - State Level Project Exhibition",
      description: "Stimulus 2018"
    }
  ],

  connect: {
    titlePrefix: "READY TO",
    titleAccent: "COLLABORATE?",
    text: "If you want measurable outcomes and engineer who owns the problem end-to-end, let’s talk!"
  }
};

/* -------------------------------------------------------------------------- */
/* UTILS & HOOKS                                                              */
/* -------------------------------------------------------------------------- */

const GlobalStyles = () => (
  <style>{`
    @keyframes ripple {
      0% { transform: scale(0); opacity: 0.5; }
      100% { transform: scale(4); opacity: 0; }
    }
    .animate-ripple {
      animation: ripple 0.6s linear;
    }
  `}</style>
);

const MouseSpotlight = ({ themeColor }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      window.requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-0 transition-opacity duration-300"
      style={{
        width: '600px',
        height: '600px',
        left: 0,
        top: 0,
        background: `radial-gradient(circle at center, ${themeColor} 0%, transparent 60%)`,
        transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
        opacity: 0.15,
        mixBlendMode: 'screen',
        filter: 'blur(40px)'
      }}
    />
  );
};

const useRipple = () => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const renderRipples = () => 
    ripples.map((r) => (
      <span
        key={r.id}
        className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
        style={{
          left: r.x,
          top: r.y,
          width: '100px',
          height: '100px',
          marginLeft: '-50px',
          marginTop: '-50px',
        }}
      />
    ));

  return { addRipple, renderRipples };
};


/* -------------------------------------------------------------------------- */
/* MAIN APPLICATION                                                           */
/* -------------------------------------------------------------------------- */

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0); 
  const [showSettings, setShowSettings] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [currentThemeId, setCurrentThemeId] = useState('vice'); 
  //state for Nav
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Helper to get current theme styles object
  const currentStyles = THEME_STYLES[currentThemeId];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setScrollProgress(currentScroll);
		  
		  // /*  Logic to show Back to Top button */
          setShowBackToTop(currentScroll > window.innerHeight / 2.0);
		  
          const sections = ['home', 'about', 'expertise', 'experience', 'connect'];
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top >= -300 && rect.top <= 400;
            }
            return false;
          });
          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    const calculateExperience = () => {
      const start = new Date(PORTFOLIO_DATA.personal.careerStartDate);
      const now = new Date();
      const diff = now - start;
      const ageDate = new Date(diff); 
      return Math.abs(ageDate.getUTCFullYear() - 1970) + (ageDate.getUTCMonth() / 12);
    };

    setYearsOfExperience(calculateExperience().toFixed(1)); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
	  // /* Logic to close mobile menu on click  */
      setIsMobileMenuOpen(false);
    }
  };
  
  const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroOpacity = Math.max(0, 1 - scrollProgress / 300);
  const heroScale = Math.max(0.9, 1 - scrollProgress / 3000); 
  const heroBlur = Math.min(10, scrollProgress / 20); 
  const navOpacity = Math.min(1, Math.max(0, (scrollProgress - 200) / 200));
  const navTranslateY = Math.max(0, (400 - scrollProgress) / 10); 

  const skillsBtnRipple = useRipple();
  const missionsBtnRipple = useRipple();

  return (
    <div className={`min-h-screen ${currentStyles.bg} text-white font-sans ${currentStyles.selection} selection:text-white overflow-x-hidden transition-colors duration-700 cursor-default`}>
      <GlobalStyles />
      <MouseSpotlight themeColor={currentStyles.spotlight} />

      {/* Background FX (Fixed dynamic classes) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 transition-colors duration-700">
        <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] ${currentStyles.blobAccent} via-transparent to-transparent`}></div>
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${currentStyles.blobSecondary} blur-[100px] rounded-full`}></div>
        <div className={`absolute top-1/2 left-1/4 w-[300px] h-[300px] ${currentStyles.blobPrimary} blur-[80px] rounded-full`}></div>
      </div>

      {/* Settings Button */}
      <div className="fixed top-24 right-0 z-50">
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className={`p-3 rounded-l-lg bg-white/10 backdrop-blur-md border-l border-t border-b border-white/20 shadow-lg hover:bg-white/20 transition-all ${showSettings ? 'translate-x-full' : 'translate-x-0'}`}
        >
          <Settings className={`w-6 h-6 ${currentStyles.textPrimary}`} />
        </button>
      </div>
	  
	  {/* Back to Top Button JSX */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={scrollToTop}
          className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all group`}
        >
          <ChevronUp className={`w-6 h-6 text-white group-hover:${currentStyles.textPrimary}`} />
        </button>
      </div>

      {/* Theme Settings Panel */}
      <div className={`fixed top-24 right-6 z-50 p-6 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl w-72 transform transition-transform duration-300 ${showSettings ? 'translate-x-0' : 'translate-x-[400px]'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Palette className="w-4 h-4" /> Theme Tuner
          </h3>
          <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { id: 'vice', name: 'Vice City', grad: 'bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500' },
            { id: 'gold', name: 'Executive Gold', grad: 'bg-gradient-to-br from-amber-400 via-yellow-500 to-blue-600' },
            { id: 'fire', name: 'Obsidian Fire', grad: 'bg-gradient-to-br from-red-600 via-orange-500 to-slate-200' },
            { id: 'ocean', name: 'Deep Ocean', grad: 'bg-gradient-to-br from-teal-400 via-sky-500 to-indigo-500' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setCurrentThemeId(t.id)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-300 flex items-center gap-3 ${currentThemeId === t.id ? `bg-white/10 ${currentStyles.borderPrimary}` : 'border-transparent hover:bg-white/5'}`}
            >
              <div className={`w-4 h-4 rounded-full ${t.grad}`}></div>
              <span className="text-sm font-medium text-slate-200">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation HUD */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-in-out ${scrollProgress > 50 ? 'bg-slate-950/20 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="font-bold text-2xl tracking-tighter flex items-center gap-2 group cursor-pointer transition-transform duration-100 ease-linear"
            onClick={() => scrollTo('home')}
            style={{ opacity: navOpacity, pointerEvents: navOpacity > 0.5 ? 'auto' : 'none', transform: `translateY(${navTranslateY}px)` }}
          >
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyles.gradientText} transition-all duration-500`}>{PORTFOLIO_DATA.personal.initials}</span>
            <span className="text-slate-400 text-sm font-mono hidden md:block group-hover:text-white transition-colors uppercase">{PORTFOLIO_DATA.personal.name}</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {['About', 'Expertise', 'Experience', 'Connect'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item === 'Connect' ? 'connect' : item.toLowerCase())}
                className={`uppercase text-sm font-bold tracking-widest ${currentStyles.navHover} transition-colors ${activeSection === (item === 'Connect' ? 'connect' : item.toLowerCase()) ? `${currentStyles.navActive} border-b-2` : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Icon Toggle */}
          <div className={`md:hidden transition-opacity duration-300 ${scrollProgress > 50 ? 'opacity-100' : 'opacity-0'}`}>
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-white"
             >
                {isMobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay JSX */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
             {['About', 'Expertise', 'Experience', 'Connect'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item === 'Connect' ? 'connect' : item.toLowerCase())}
                className={`text-left text-lg font-bold tracking-widest py-3 border-b border-white/5 ${currentStyles.navHover} transition-colors ${activeSection === (item === 'Connect' ? 'connect' : item.toLowerCase()) ? `${currentStyles.textSecondary}` : 'text-slate-300'}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="container mx-auto px-6 text-center relative" style={{ opacity: heroOpacity, transform: `scale(${heroScale})`, filter: `blur(${heroBlur}px)` }}>
          <div className={`inline-block mb-8 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm animate-fade-in`}>
            <span className={`${currentStyles.textSecondary} font-mono text-sm tracking-widest uppercase`}>EST. {PORTFOLIO_DATA.personal.estYear} • {PORTFOLIO_DATA.personal.location}</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 relative z-10 leading-tight">
            {PORTFOLIO_DATA.personal.name.split(" ").map((namePart, index) => (
              <span key={index} className={`block text-transparent bg-clip-text bg-gradient-to-r ${currentStyles.gradientText} filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transform hover:scale-105 transition-transform duration-500 cursor-default`}>
                {namePart}
              </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 mt-6">
            {PORTFOLIO_DATA.personal.vision}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={(e) => { skillsBtnRipple.addRipple(e); scrollTo('expertise'); }} 
              className={`relative overflow-hidden px-8 py-4 bg-gradient-to-r ${currentStyles.heroButton} rounded-sm font-bold tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto`}
            >
              <span className="relative z-10">EXPLORE SKILLS</span>
              {skillsBtnRipple.renderRipples()}
            </button>

            <button 
              onClick={(e) => { missionsBtnRipple.addRipple(e); scrollTo('experience'); }} 
              className={`relative overflow-hidden px-8 py-4 border ${currentStyles.borderSecondaryDim} ${currentStyles.textSecondary} rounded-sm font-bold tracking-widest ${currentStyles.hoverBgSecondary} ${currentStyles.hoverBorderSecondary} hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 w-full md:w-auto`}
            >
              <span className="relative z-10">VIEW MISSIONS</span>
              {missionsBtnRipple.renderRipples()}
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer" onClick={() => scrollTo('about')}>
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative group">
               <div className={`relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10 transition-all duration-500 group-hover:${currentStyles.borderPrimary}`}>
                  <img src={PORTFOLIO_DATA.personal.profileImage} alt="Chandan Shinde" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${currentStyles.bg?.replace('bg-', '') || 'slate-950'} via-transparent to-transparent opacity-80`}></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight shadow-black drop-shadow-lg">{PORTFOLIO_DATA.personal.name}</h3>
                    <div className="flex justify-between items-end mt-2">
                        <p className={`${currentStyles.textSecondary} font-mono text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm uppercase`}>RUNTIME: {yearsOfExperience} YEARS</p>
                    </div>
                  </div>
               </div>
               <div className={`absolute top-4 -right-4 w-full h-full border border-white/10 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500`}></div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-none">
                {PORTFOLIO_DATA.about.title.split(' ')[0]} <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyles.gradientText}`}>
                    {PORTFOLIO_DATA.about.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                <p>{PORTFOLIO_DATA.about.intro}</p>
                <p>{PORTFOLIO_DATA.about.description}</p>
                <div className={`p-6 bg-slate-800/30 border-l-4 ${currentStyles.borderSecondary} rounded-r-lg mt-8 backdrop-blur-sm`}>
                  <h4 className={`${currentStyles.textSecondary} font-bold mb-2 uppercase tracking-wider text-sm`}>My Vision</h4>
                  <p className="italic text-white font-light text-xl">"{PORTFOLIO_DATA.about.visionQuote}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
              {PORTFOLIO_DATA.skills.sectionTitle.split(" ")[0]} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyles.gradientText}`}>{PORTFOLIO_DATA.skills.sectionTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{PORTFOLIO_DATA.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skills.categories.map((skillCat, index) => {
              const IconComponent = { 'Code': Code, 'Database': Database, 'Server': Server, 'Terminal': Terminal }[skillCat.iconType] || Code;
              return <SkillCard key={index} icon={<IconComponent className={`w-8 h-8 ${currentStyles.textPrimary}`} />} title={skillCat.title} skills={skillCat.items} styles={currentStyles} />;
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative z-10 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight uppercase text-center md:text-left">
            Mission <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyles.gradientText}`}>History</span>
          </h2>
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-16">
            {PORTFOLIO_DATA.experience.map((job, index) => <ExperienceNode key={index} role={job.role} company={job.company} period={job.period} points={job.points} tech={job.techStack} current={job.isCurrent} styles={currentStyles} />)}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className={`py-16 relative z-10 border-t border-white/5 ${currentStyles.bg}`}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${currentStyles.textSecondary} flex items-center gap-2`}><Shield className="w-6 h-6" /> EDUCATION</h3>
            <div className="space-y-6">
               {PORTFOLIO_DATA.education.map((edu, index) => <EducationCard key={index} edu={edu} />)}
            </div>
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${currentStyles.textPrimary} flex items-center gap-2`}><Cpu className="w-6 h-6" /> ACHIEVEMENTS</h3>
            <ul className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((achieve, index) => <AchievementCard key={index} achieve={achieve} styles={currentStyles} />)}
            </ul>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className={`py-32 relative z-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-black`}>
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            {PORTFOLIO_DATA.connect.titlePrefix} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentStyles.gradientText}`}>{PORTFOLIO_DATA.connect.titleAccent}</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto font-light">
            {PORTFOLIO_DATA.connect.text}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className={`group relative px-8 py-4 bg-slate-800 text-white font-bold rounded-sm overflow-hidden hover:text-white transition-colors border border-white/5`}>
              {/* FIX: Explicit background class from theme object */}
              <div className={`absolute inset-0 w-0 ${currentStyles.socialBgPrimary} transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
              <span className="relative flex items-center gap-2"><Mail size={20}/> Send Email</span>
            </a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className={`group relative px-8 py-4 bg-slate-800 text-white font-bold rounded-sm overflow-hidden hover:text-white transition-colors border border-white/5`}>
              <div className={`absolute inset-0 w-0 ${currentStyles.socialBgSecondary} transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
              <span className="relative flex items-center gap-2"><Linkedin size={20}/> LinkedIn</span>
            </a>
            <a href={PORTFOLIO_DATA.personal.qwiklabs}  target="_blank" rel="noreferrer"  className={`group relative px-8 py-4 bg-slate-800 text-white font-bold rounded-sm overflow-hidden hover:text-white transition-colors border border-white/5`}>
              <div className={`absolute inset-0 w-0 ${currentStyles.socialBgAccent} transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
              <span className="relative flex items-center gap-2"><ExternalLink size={20}/> Qwiklabs</span>
            </a>
          </div>
          <footer className="mt-24 text-slate-600 text-sm font-mono uppercase tracking-widest"><p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All Rights Reserved.</p></footer>
        </div>
      </section>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* COMPONENT LIBRARY                                                          */
/* -------------------------------------------------------------------------- */

const SkillCard = ({ icon, title, skills, styles }) => {
  const { addRipple, renderRipples } = useRipple();
  return (
    <div onClick={addRipple} className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transition-all duration-300 ${styles.hoverBorderPrimary} hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 cursor-pointer`}>
      <div className="mb-6 bg-black/20 w-16 h-16 rounded-lg flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white/90 uppercase tracking-wide">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-slate-400 text-sm font-medium flex items-center gap-2 font-mono">
            <span className={`w-1.5 h-1.5 rounded-full ${styles.bgPrimary}`}></span>
            {skill}
          </li>
        ))}
      </ul>
      {renderRipples()}
    </div>
  );
};

const EducationCard = ({ edu }) => {
  const { addRipple, renderRipples } = useRipple();
  return (
    <div onClick={addRipple} className="group relative overflow-hidden hover:bg-white/5 p-4 rounded-lg transition-colors border border-transparent hover:border-white/10 cursor-pointer">
      <h4 className="text-xl font-bold text-white">{edu.school}</h4>
      <p className="text-slate-400">{edu.degree} ({edu.grade})</p>
      <p className="text-slate-600 text-sm font-mono mt-1">{edu.year}</p>
      {renderRipples()}
    </div>
  );
};

const AchievementCard = ({ achieve, styles }) => {
  const { addRipple, renderRipples } = useRipple();
  return (
    <li onClick={addRipple} className={`relative overflow-hidden flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 ${styles.hoverBorderPrimary} transition-colors cursor-pointer`}>
      <span className={`${styles.textHighlight} font-bold text-xl font-mono`}>{achieve.rank}</span>
      <div>
        <h4 className="font-bold text-white">{achieve.title}</h4>
        <p className="text-slate-400 text-sm mt-1">{achieve.description}</p>
      </div>
      {renderRipples()}
    </li>
  );
};

const ExperienceNode = ({ role, company, period, points, tech, current, styles }) => (
  <div className="relative pl-8 md:pl-12 group">
    {/* Timeline Dot: Default slate, lights up on hover using explicit style objects */}
    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-slate-900 border-slate-600 ${styles.hoverBgPrimary} ${styles.hoverBorderPrimary} group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300`}></div>
    
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
      {/* Title: Default white, lights up on hover */}
      <h3 className={`text-2xl font-bold uppercase text-white ${styles.hoverTextPrimary} transition-colors`}>{role}</h3>
      <span className="font-mono text-sm text-slate-500">{period}</span>
    </div>
    
    <h4 className="text-lg font-semibold text-slate-300 mb-4">{company}</h4>
    
    <ul className="list-none space-y-2 mb-6 text-slate-400">
      {points.map((point, index) => (
        <li key={index} className="leading-relaxed relative pl-4">
            {/* FIX: Using explicit span for bullet with explicit bg color class */}
            <span className={`absolute left-0 top-2.5 w-1.5 h-0.5 ${styles.bgSecondary}`}></span>
            {point}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-slate-300 hover:border-slate-500 transition-colors uppercase tracking-wider">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default App;