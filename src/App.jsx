import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Upload, Activity, AlertCircle, Camera, Zap, BrainCircuit, Globe, Server, Code, FileVideo, UploadCloud, CheckCircle2, AlertTriangle, Loader2, Menu, X } from 'lucide-react';

/* ==========================================================================
   COMPONENT: NAVBAR
   ========================================================================== */
const Navbar = ({ sections, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center text-white">
        <div className="text-xl font-sans font-bold tracking-tighter cursor-pointer" onClick={() => scrollToSection(0)}>
          skin.<span className="font-serif italic font-light">AI.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.15em] uppercase text-white/80">
          {sections.map((sec, idx) => (
            <button key={idx} onClick={() => scrollToSection(sec.target)} className="hover:text-white transition-colors">{sec.name}</button>
          ))}
        </div>
        <div className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase hover:text-white/70 cursor-pointer">Login</div>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black p-6 flex flex-col gap-6 border-b border-white/10 text-white">
          {sections.map((sec, idx) => (
            <button key={idx} onClick={() => { scrollToSection(sec.target); setMobileMenuOpen(false); }} className="text-xs font-bold tracking-[0.2em] uppercase text-left">{sec.name}</button>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ==========================================================================
   COMPONENT: HERO SECTION
   ========================================================================== */
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <motion.section 
      style={{ opacity }}
      className="h-screen relative flex flex-col justify-center items-center overflow-hidden px-6 bg-black"
    >
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[120vh] -top-[10vh]"
      >
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/assets/bg-video.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center -mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center drop-shadow-lg"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.1] mb-6">
            <span className="font-sans font-medium tracking-tighter">AI-Powered</span><br/>
            <span className="font-serif italic font-light">Skin Disease Detection</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl font-sans font-normal leading-relaxed drop-shadow-md mb-8">
            Upload an image of your skin condition and get instant predictions using advanced Convolutional Neural Networks (CNN).
          </p>
          <div className="w-full h-[1px] bg-white/20 max-w-xs mb-8"></div>
          <div className="text-white/70 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Fast</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Accurate</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> AI-Driven Diagnosis Assistance</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex justify-center w-full"
      >
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight * 0.6, behavior: 'smooth' })} className="relative overflow-hidden bg-white text-black group flex items-center justify-center gap-3 rounded-full py-4 px-12 transition-transform hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          <span className="absolute inset-0 w-full h-full bg-[#1A1A1A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
          <span className="relative z-10 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase flex items-center gap-3 group-hover:text-white transition-colors duration-500 delay-75">
            Wanna TRY?
            <Activity size={16} className="transition-transform group-hover:rotate-12" />
          </span>
        </button>
      </motion.div>
    </motion.section>
  );
};

/* ==========================================================================
   COMPONENT: ABOUT SECTION
   ========================================================================== */
const AboutSection = () => {
  const sectionImage = "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2535&auto=format&fit=crop";
  return (
    <section className="bg-[#FAF9F5] min-h-screen py-32 px-6 sm:px-12 lg:px-24 flex items-center justify-center text-[#1A1A1A]">
      <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105" style={{ backgroundImage: `url(${sectionImage})` }} />
          <div className="absolute inset-0 bg-[#FAF9F5]/0 transition-colors duration-700 group-hover:bg-[#FAF9F5]/10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-start gap-12"
        >
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-4 border-b border-[#1A1A1A]/10 pb-2 inline-block">Platform Overview</div>
            <h2 className="text-4xl sm:text-5xl tracking-tighter leading-tight mb-6 font-serif italic text-light">About <span className="font-sans font-medium not-italic">Our System.</span></h2>
            <p className="text-base text-[#1A1A1A]/80 max-w-lg leading-relaxed font-sans font-normal mb-4">
              This platform uses deep learning techniques to detect and classify skin diseases from images. By leveraging Convolutional Neural Networks (CNN), the system analyzes visual patterns in skin images and provides predictions for possible conditions.
            </p>
            <p className="text-sm font-semibold text-[#1A1A1A] max-w-lg leading-relaxed bg-[#1A1A1A]/5 p-4 rounded-lg border-l-4 border-[#1A1A1A]">
              The goal is to assist users with early detection and awareness, not to replace professional medical advice.
            </p>
          </div>
          <div>
             <h2 className="text-4xl sm:text-5xl tracking-tighter leading-tight mb-6 font-serif italic text-light">What is <span className="font-sans font-medium not-italic">a CNN?</span></h2>
            <p className="text-base text-[#1A1A1A]/80 max-w-lg leading-relaxed font-sans font-normal mb-4">
              A Convolutional Neural Network (CNN) is a type of deep learning algorithm specifically designed for image analysis. It automatically detects important features such as edges, textures, and patterns in images.
            </p>
            <p className="text-base text-[#1A1A1A]/80 max-w-lg leading-relaxed font-sans font-normal">
              In this system, CNN helps identify skin disease patterns by learning from a large dataset of labeled skin images.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================================================
   COMPONENT: HOW IT WORKS SECTION
   ========================================================================== */
const HowItWorksSection = () => {
  const steps = [
    { step: "01", title: "Upload Image", desc: "Upload a clear image of the affected skin area through our secure interface." },
    { step: "02", title: "Image Processing", desc: "The system preprocesses the image dynamically, performing resizing and normalization." },
    { step: "03", title: "CNN Analysis", desc: "A trained Convolutional Neural Network extracts deep visual features and patterns." },
    { step: "04", title: "Prediction Result", desc: "The clinical model calculates probabilties and predicts the most probable skin condition." }
  ];

  return (
    <section className="bg-[#FAF9F5] py-32 px-6 sm:px-12 lg:px-24 text-[#1A1A1A]">
      <div className="max-w-[1400px] w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-6">Workflow Process</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-tight font-serif italic text-light">How <span className="font-sans font-medium not-italic">it works.</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 border-t border-[#1A1A1A]/10 pt-16">
          {steps.map((card, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: idx * 0.1 }} className="group cursor-default relative overflow-hidden flex flex-col h-full">
              <div className="text-[#1A1A1A]/10 font-sans font-semibold text-5xl mb-6 transition-colors duration-500 group-hover:text-[#1A1A1A]/30">{card.step}</div>
              <h3 className="text-xl font-sans font-semibold mb-4 tracking-tight">{card.title}</h3>
              <p className="text-[#1A1A1A]/70 font-sans leading-relaxed text-sm mb-8">{card.desc}</p>
              <div className="mt-auto h-[2px] w-full bg-[#1A1A1A]/10 relative">
                 <div className="absolute inset-0 bg-[#1A1A1A] w-0 transition-all duration-[0.8s] group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   COMPONENT: UPLOAD SECTION
   ========================================================================== */
const UploadSection = () => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(URL.createObjectURL(e.dataTransfer.files[0]));
      setResult(null);
    }
  };

  const handlePredict = () => {
    if (!file) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({ disease: "Acne", confidence: "92%" });
    }, 2500);
  };

  return (
    <section className="bg-[#FAF9F5] pb-32 px-6 sm:px-12 lg:px-24 flex items-center justify-center text-[#1A1A1A]">
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-tight font-serif italic text-light mb-4">Upload <span className="font-sans font-medium not-italic">Your Image.</span></h2>
          <p className="text-[#1A1A1A]/70 font-sans max-w-md mx-auto">Choose or drag and drop an image of the affected skin area to get started.</p>
        </div>

        <div onDragOver={handleDragOver} onDrop={handleDrop} className="w-full max-w-2xl bg-white border-2 border-dashed border-[#1A1A1A]/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center transition-colors hover:border-[#1A1A1A]/40">
          {file ? (
             <div className="w-full flex justify-center mb-8 relative group">
               <img src={file} alt="Dermatology upload" className="h-64 object-cover rounded-xl shadow-lg border border-black/5" />
               <button onClick={() => { setFile(null); setResult(null); }} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
             </div>
          ) : (
            <div className="bg-[#FAF9F5] p-6 rounded-full mb-6 text-[#1A1A1A]/40"><UploadCloud size={40} /></div>
          )}

          {!file && <p className="text-sm font-sans font-semibold text-[#1A1A1A]/60 mb-8">Drag & Drop your high-res skin patch here, <br/> or click to browse files.</p>}

          <button 
            onClick={!file ? () => setFile("https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop") : handlePredict}
            disabled={isAnalyzing}
            className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-3 shadow-xl"
          >
            {isAnalyzing ? <><Loader2 size={18} className="animate-spin" /> Analyzing...</> : !file ? "Browse Files" : "Upload & Predict"}
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl mt-12 bg-white rounded-3xl p-8 border border-[#1A1A1A]/10 shadow-2xl flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-green-600" size={24} />
                <h3 className="text-2xl font-serif font-medium">Prediction Result</h3>
              </div>
              <p className="text-sm font-sans text-[#1A1A1A]/70 mb-8">The uploaded image has been analyzed by our CNN model.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#FAF9F5] p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/50 mb-2">Predicted Disease</span>
                  <span className="text-2xl font-sans font-medium">{result.disease}</span>
                </div>
                <div className="bg-[#FAF9F5] p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/50 mb-2">Confidence</span>
                  <span className="text-2xl font-sans font-bold text-[#1A1A1A]">{result.confidence}</span>
                </div>
              </div>
              <div className="bg-red-50 text-red-800 p-4 rounded-xl flex items-start gap-4 text-sm font-sans border border-red-100">
                 <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                 <p><strong>Note:</strong> This result is AI-generated and should not be considered a medical diagnosis.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ==========================================================================
   COMPONENT: FEATURES SECTION
   ========================================================================== */
const FeaturesSection = () => {
  const features = [
    { icon: <Camera size={20} />, title: "Image-based detection", desc: "Instantly process dermal patches." },
    { icon: <Zap size={20} />, title: "Real-time predictions", desc: "Fast inferencing for clinical speed." },
    { icon: <BrainCircuit size={20} />, title: "AI-powered analysis", desc: "Extracting complex edge patterns." },
    { icon: <Activity size={20} />, title: "High CNN accuracy", desc: "Deeply trained for algorithmic certainty." },
    { icon: <Globe size={20} />, title: "Easy-to-use web UI", desc: "Accessible globally via browser." }
  ];
  const diseases = ["Acne", "Eczema", "Psoriasis", "Melanoma", "Fungal Infections", "Benign Keratosis"];

  return (
    <section className="bg-[#050505] text-white py-32 px-6 sm:px-12 lg:px-24 flex flex-col items-center border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.5)] z-20 relative">
      <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1, ease: "easeOut" }} className="flex flex-col gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight mb-6">Diagnostic Capabilities</h2>
            <p className="text-[#a1a1aa] font-sans leading-relaxed text-sm md:text-base mb-6">
               Our secure diagnostic engine is built to handle complex visual data with clinical efficiency. By leveraging custom-trained Convolutional Neural Networks, the system scales effortlessly to provide instantaneous pattern recognition.
            </p>
            <p className="text-[#a1a1aa] font-sans leading-relaxed text-sm md:text-base">
               It is engineered to protect user privacy while delivering deep, high-resolution feature extraction from uploaded images, making professional-grade AI analysis accessible globally without exposing structural backend logic.
            </p>
          </div>
          <div>
             <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight mb-6">Detectable Skin Conditions</h2>
            <div className="flex flex-wrap gap-3">
              {diseases.map((d, i) => (
                <span key={i} className="px-5 py-2 rounded-full border border-[#27272a] text-xs font-bold tracking-widest uppercase bg-[#111111]/50">{d}</span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="flex flex-col">
           <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight mb-8">Key Features</h2>
           <div className="grid sm:grid-cols-2 gap-4">
             {features.map((feat, idx) => (
               <div key={idx} className="p-6 bg-[#0a0a0a] border border-[#27272a] rounded-xl flex flex-col hover:border-[#52525b] transition-colors">
                 <div className="text-white mb-4 opacity-70">{feat.icon}</div>
                 <h3 className="font-sans font-semibold text-sm mb-2">{feat.title}</h3>
                 <p className="text-[#a1a1aa] text-xs font-sans">{feat.desc}</p>
               </div>
             ))}
             <div className="p-6 bg-transparent border border-dashed border-[#27272a] rounded-xl flex items-center justify-center">
                 <span className="text-[#27272a] text-xs font-bold tracking-widest uppercase">Scalable</span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================================================
   COMPONENT: FOOTER SECTION
   ========================================================================== */
const FooterSection = () => {
  return (
    <footer className="bg-[#050505] text-[#FAF9F5] pt-24 pb-8 px-6 sm:px-12 lg:px-24 text-center flex flex-col items-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        <div className="w-full max-w-4xl bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 mb-24 flex flex-col md:flex-row items-center md:items-start text-left gap-6 shadow-[0_0_50px_rgba(234,179,8,0.05)]">
          <div className="bg-yellow-500/20 text-yellow-500 p-3 rounded-full shrink-0"><AlertCircle size={28} /></div>
          <div>
            <h3 className="text-lg font-sans font-bold tracking-widest uppercase text-yellow-500 mb-2">Disclaimer</h3>
            <p className="text-sm font-sans text-yellow-200/80 leading-relaxed font-medium">
              This system is intended for educational and informational purposes only. It does not replace professional medical consultation. Please consult a qualified healthcare provider for accurate diagnosis and treatment.
            </p>
          </div>
        </div>
        <div className="flex gap-8 text-xs font-bold font-sans tracking-widest uppercase text-[#FAF9F5]/40 mb-16">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex flex-col items-center gap-2 text-[#FAF9F5]/30">
          <span className="text-sm font-sans">© 2026 Skin Disease Detection System</span>
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase">Built using AI & Deep Learning</span>
        </div>
      </div>
    </footer>
  );
};

/* ==========================================================================
   MAIN APP ORCHESTRATION
   ========================================================================== */
export default function App() {
  const scrollToPercentage = (percentage) => {
    window.scrollTo({
      top: document.body.scrollHeight * percentage,
      behavior: 'smooth'
    });
  };

  const sections = [
    { name: 'Home', target: 0 },
    { name: 'How It Works', target: 0.3 },
    { name: 'Demo Upload', target: 0.6 },
    { name: 'Features', target: 0.85 }
  ];

  return (
    <div className="bg-[#FAF9F5] text-white overflow-hidden scroll-smooth font-sans">
      <Navbar sections={sections} scrollToSection={scrollToPercentage} />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <UploadSection />
        <FeaturesSection />
        <FooterSection />
      </main>
    </div>
  );
}
