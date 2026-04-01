'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, Trophy, Code, MapPin, Send } from 'lucide-react';
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

      <div className="relative z-10 pt-32 pb-32">
        <div className="text-center mb-32 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            My Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A cinematic timeline of my professional experience and hackathon achievements.
          </motion.p>
        </div>

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
            Ready to <span className="font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">collaborate?</span>
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
