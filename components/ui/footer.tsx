"use client";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type LinkItem = {
  name: string;
  badge?: string;
};

type ColumnItem = {
  title: string;
  badge?: string;
  links: LinkItem[];
};

type FooterData = {
  brand: {
    name: string;
    description: string;
  };
  columns: ColumnItem[];
};

const footerData: FooterData = {
  brand: {
    name: "ActivationLed",
    description: "Behavioral Designed Activation Journeys for PLG SaaS to lift Aha! moments by 23%."
  },
  columns: [
    {
      title: "RESOURCES",
      links: [
        { name: "Freebies & Audits" },
        { name: "Tools" },
        { name: "Psychology" },
        { name: "Blog", badge: "soon" },
        { name: "Components", badge: "soon" },
        { name: "Playbooks", badge: "soon" },
      ]
    },
    {
      title: "COMPANY",
      badge: "SOON",
      links: [
        { name: "Mission" },
        { name: "SaaS Ecosystem" },
        { name: "Affiliate Program" },
        { name: "Referral Program" },
        { name: "Partners" },
        { name: "About Us" },
      ]
    },
    {
      title: "COMPARE",
      badge: "SOON",
      links: [
        { name: "DaaS" },
        { name: "PLG Boutique" },
        { name: "ProductLed" },
        { name: "Vulnabyl" },
        { name: "GrowthMates" },
        { name: "DelightPath" },
      ]
    }
  ]
};

export default function StickyFooter() {
  return (
    <div className="relative h-[1000px] md:h-[500px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+1000px)] md:h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[1000px] md:h-[500px] sticky top-[calc(100vh-1000px)] md:top-[calc(100vh-500px)] flex items-center justify-center p-4 md:p-12 bg-[#050a15]">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={containerVariants}
            className="relative w-full max-w-6xl bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl mt-12 md:mt-0"
          >
            {/* Tape Top Left */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-8 w-24 md:w-32 h-8 md:h-12 bg-primary -rotate-12 rounded-sm shadow-md z-10" />
            {/* Tape Top Right */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-8 w-24 md:w-32 h-8 md:h-12 bg-primary rotate-12 rounded-sm shadow-md z-10" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {/* Brand Column */}
              <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight font-display">
                  {footerData.brand.name}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed font-sans">
                  {footerData.brand.description}
                </p>
              </motion.div>

              {/* Links Columns */}
              {footerData.columns.map((col, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-gray-400 font-semibold tracking-wider uppercase text-sm font-sans">{col.title}</h3>
                    {col.badge && (
                      <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                        {col.badge}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="flex items-center gap-3">
                        <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium text-base font-sans">
                          {link.name}
                        </a>
                        {link.badge && (
                          <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                            {link.badge}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
