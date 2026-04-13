import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/animations";

const partners = [
  { name: "NSK", logo: "/images/partners/nsk.png" },
  { name: "Prevest DenPro", logo: "/images/partners/prevest.png" },
  { name: "Tokuyama", logo: "/images/partners/tokuyama.png" },
<<<<<<< HEAD
  /** PNG có nhiều margin trong suốt — scale để cân bằng với Tokuyama */
  { name: "DiaDent", logo: "/images/partners/diadent.png", logoScale: 2.10
   },
=======
  { name: "DiaDent", logo: "/images/partners/diadent.png" },
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
  { name: "DMG", logo: "/images/partners/dmg.png" },
];

// Duplicate for seamless infinite scroll
const partnersRow1 = [...partners, ...partners, ...partners];

function MarqueeRow({ items, duration = 30, reverse = false }) {
  return (
    <div className="relative overflow-hidden group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {items.map((partner, i) => (
          <div
            key={i}
<<<<<<< HEAD
            className="flex-shrink-0 overflow-hidden px-5 py-3 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group/card flex items-center justify-center"
            style={{ minWidth: 220, height: 104 }}
=======
            className="flex-shrink-0 px-8 py-5 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group/card flex items-center justify-center"
            style={{ minWidth: 180, height: 80 }}
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
          >
            <img
              src={partner.logo}
              alt={partner.name}
<<<<<<< HEAD
              className="h-14 md:h-16 w-auto object-contain origin-center"
              style={
                partner.logoScale != null
                  ? { transform: `scale(${partner.logoScale})` }
                  : undefined
              }
=======
              className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnersCarousel() {
  return (
    <section className="py-20 lg:py-24 bg-muted/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-12">
        <Reveal className="text-center">
          <span className="font-body text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">Hệ sinh thái</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            ĐỐI TÁC <span className="text-primary">CHIẾN LƯỢC</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-5" />
        </Reveal>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={partnersRow1} duration={25} />
      </div>
    </section>
  );
}