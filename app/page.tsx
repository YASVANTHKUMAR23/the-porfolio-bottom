'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Briefcase, Trophy, Code, MapPin, Send, ZoomIn, X } from 'lucide-react';
import Image from 'next/image';
import StickyFooter from '@/components/ui/footer';

const timelineData = [
  {
    id: 1,
    title: "Internship 1",
    description: "Worked on frontend development and built responsive UI components for a global e-commerce platform.",
    icon: Briefcase,
    isLeftNode: true,
    date: "Jun 2023 - Aug 2023",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    title: "Internship 2",
    description: "Developed backend APIs and integrated third-party services to streamline data processing.",
    icon: Briefcase,
    isLeftNode: false,
    date: "Jan 2024 - May 2024",
    location: "New York, NY"
  },
  {
    id: 3,
    title: "Internship 3",
    description: "Led a team of interns to deliver a full-stack web application with real-time features.",
    icon: Briefcase,
    isLeftNode: true,
    date: "Jun 2024 - Aug 2024",
    location: "Remote"
  },
  {
    id: 4,
    title: "Hackathon 1",
    description: "Won 1st place for building an AI-powered accessibility tool in under 24 hours.",
    icon: Trophy,
    isLeftNode: false,
    date: "Oct 2024",
    location: "Boston, MA"
  },
  {
    id: 5,
    title: "Hackathon 2",
    description: "Created a blockchain-based voting system with smart contracts and decentralized storage.",
    icon: Code,
    isLeftNode: true,
    date: "Feb 2025",
    location: "Austin, TX"
  }
];

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#050a15] to-black">
      {/* Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-grid opacity-30"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        />
        <motion.div
          className="absolute top-[20%] left-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        />
        <motion.div
          className="absolute top-[60%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
        />
      </div>

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Hero Section */}
      <HeroSection />

      <div className="relative z-10 pb-32 pt-16">

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto flex flex-col">
          {/* SVG Path */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#eab308" />
                  <stop offset="25%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="75%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              
              {/* Mobile Path */}
              <path
                d="M 10 0 L 10 100"
                className="md:hidden"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 10 0 L 10 100"
                className="md:hidden"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: scrollYProgress }}
              />

              {/* Desktop Path */}
              <path
                d="M 70 0 C 70 5, 30 5, 30 10 C 30 20, 70 20, 70 30 C 70 40, 30 40, 30 50 C 30 60, 70 60, 70 70 C 70 80, 30 80, 30 90 C 30 95, 70 95, 70 100"
                className="hidden md:block"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 70 0 C 70 5, 30 5, 30 10 C 30 20, 70 20, 70 30 C 70 40, 30 40, 30 50 C 30 60, 70 60, 70 70 C 70 80, 30 80, 30 90 C 30 95, 70 95, 70 100"
                className="hidden md:block"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Sticky Footer */}
      <StickyFooter />
    </main>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Card animations: Starts zoomed in (1.5), scales down to 1 at center, then to 0.8
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);

  // Node animations
  const nodeScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.5, 1.2, 0.8]);
  const nodeGlow = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [
    "0px 0px 0px rgba(0,0,0,0)",
    "0px 0px 20px rgba(0, 225, 171, 0.8)",
    "0px 0px 0px rgba(0,0,0,0)"
  ]);

  // Icon animations
  const iconScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1.1, 0.8]);
  const iconRotate = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [-10, 0, 10]);

  const Icon = item.icon;

  return (
    <div ref={ref} className="relative h-[400px] md:h-[450px] w-full flex items-center z-10">
      {/* Node */}
      <motion.div
        className={`absolute w-6 h-6 rounded-full bg-black border-4 border-primary z-20 -translate-x-1/2 -translate-y-1/2 ${
          item.isLeftNode ? 'md:left-[30%]' : 'md:left-[70%]'
        } left-[10%]`}
        style={{
          top: '50%',
          scale: nodeScale,
          boxShadow: nodeGlow
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Date & Location Box */}
      <motion.div
        className={`absolute z-10 flex flex-col
          /* Mobile: positioned above the card */
          top-[20px] left-[18%]
          /* Desktop: vertically centered, opposite side */
          md:top-1/2 md:-translate-y-1/2
          ${item.isLeftNode 
            ? 'md:right-[75%] md:left-auto md:items-end md:text-right' 
            : 'md:left-[75%] md:right-auto md:items-start md:text-left'}
        `}
        style={{ scale, opacity, y }}
      >
        <div className="inline-flex flex-col gap-1.5 p-3 md:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <span className="text-primary font-mono text-sm md:text-base font-bold tracking-wider uppercase">{item.date}</span>
          <span className="text-gray-400 text-xs md:text-sm font-medium flex items-center gap-1.5">
            <MapPin size={14} className="text-gray-500" />
            {item.location}
          </span>
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className={`absolute w-[85%] md:w-[45%] ${
          item.isLeftNode 
            ? 'md:left-[38%] md:right-auto' 
            : 'md:right-[38%] md:left-auto'
        } left-[18%] md:translate-x-0 p-8 md:p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden group`}
        style={{ scale, opacity, y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col md:flex-row items-start gap-5">
          <motion.div 
            className="p-4 rounded-2xl bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ scale: iconScale, rotate: iconRotate }}
          >
            <Icon size={32} />
          </motion.div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const formY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full max-w-4xl px-6"
        style={{ y: formY }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
            Ready to <span className="font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary pr-2 -mr-2">collaborate?</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
            Drop a message and let's build something extraordinary together.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-gray-400 uppercase tracking-wider ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans text-lg" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-gray-400 uppercase tracking-wider ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans text-lg" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-400 uppercase tracking-wider ml-2">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-sans text-lg resize-none" 
              />
            </div>
            <button className="mt-4 group relative w-full md:w-auto self-end inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-display font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-black transition-colors">Send Message</span>
              <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity, scale, y: textY }} className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter">
            <span className="font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 pr-2 -mr-2">Exp</span>erience
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-sans max-w-2xl mx-auto">
            A cinematic journey through my professional timeline and achievements.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Glass Cards */}
      <motion.div 
        style={{ y: y1 }} 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[5%] md:left-[15%] top-[20%] p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hidden md:flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <Briefcase className="w-8 h-8 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="text-white font-bold font-display text-lg">Internships</h3>
          <p className="text-gray-400 text-sm font-mono">3+ Positions</p>
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }} 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="absolute right-[5%] md:right-[15%] bottom-[20%] p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hidden md:flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
      >
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Trophy className="w-8 h-8 text-purple-400" />
        </div>
        <div className="text-center">
          <h3 className="text-white font-bold font-display text-lg">Hackathons</h3>
          <p className="text-gray-400 text-sm font-mono">Global Winner</p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-[10%] md:left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-gray-500 text-xs font-mono uppercase tracking-widest animate-pulse mb-4">Scroll</span>
        <div className="w-[2px] md:w-[4px] h-32 bg-gradient-to-b from-transparent via-primary to-primary" />
      </motion.div>
    </section>
  );
}

const certifications = [
  { id: 1, title: "AWS Solutions Architect", desc: "Advanced cloud architecture, security, and deployment strategies.", img: "https://picsum.photos/seed/cert1/1200/800" },
  { id: 2, title: "Google Cloud Developer", desc: "Scalable application development and microservices on GCP.", img: "https://picsum.photos/seed/cert2/1200/800" },
  { id: 3, title: "Meta Front-End Professional", desc: "React, advanced UI/UX, and performance optimization.", img: "https://picsum.photos/seed/cert3/1200/800" },
  { id: 4, title: "UI/UX Design Specialization", desc: "User-centered design, wireframing, and high-fidelity prototyping.", img: "https://picsum.photos/seed/cert4/1200/800" },
  { id: 5, title: "Advanced React Patterns", desc: "State machines, context, hooks, and concurrent rendering.", img: "https://picsum.photos/seed/cert5/1200/800" },
];

function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <section className="relative w-full min-h-screen z-10 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row relative">
        {/* Sticky Left: Title */}
        <div className="md:w-1/3 md:sticky md:top-32 h-auto md:h-[calc(100vh-8rem)] flex flex-col justify-start z-10 mb-16 md:mb-0">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white"
          >
            <span className="font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary pr-2 -mr-2">Cert</span>ifications
          </motion.h2>
          <p className="mt-6 text-gray-400 font-sans text-lg max-w-sm">
            Verified skills and professional achievements. Scroll to explore my technical certifications.
          </p>
        </div>

        {/* Scrolling Right: Cards */}
        <div className="md:w-2/3 relative z-10 flex flex-col gap-16 md:gap-24 md:pl-12">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ transformPerspective: 1000 }}
              className="relative w-full max-w-7xl h-[85vh] bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,225,171,0.2)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-20 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <div className="relative flex-1 w-full bg-black/40">
                <Image src={selectedCert.img} alt={selectedCert.title} fill className="object-contain p-2 md:p-4" unoptimized />
              </div>
              <div className="p-6 md:p-8 bg-white/5 border-t border-white/10">
                <h3 className="text-3xl font-display font-bold text-white">{selectedCert.title}</h3>
                <p className="text-gray-400 mt-2 text-lg">{selectedCert.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CertCard({ cert, index, onClick }: { cert: any, index: number, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      {/* Glowing background orb */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <motion.div 
        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformPerspective: 1000 }}
        className="relative p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
      >
        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-6">
          <Image src={cert.img} alt={cert.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Zoom Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-full text-white flex items-center gap-2 border border-white/20 shadow-[0_0_20px_rgba(0,225,171,0.3)]">
              <ZoomIn size={20} className="text-primary" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider pr-2">Zoom</span>
            </div>
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
          <p className="text-gray-400 font-sans">{cert.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
