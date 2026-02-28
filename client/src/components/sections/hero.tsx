import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] md:min-h-[800px] flex flex-col justify-center pt-24 sm:pt-32 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* superbike racing aggressive dark aesthetic */}
        <img
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop"
          alt="Dark premium superbike"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Subtle biker pattern overlay */}
        <div className="absolute inset-0 biker-pattern opacity-10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-5xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10"
          >
            <span className="h-[2px] w-8 md:w-12 bg-primary shadow-[0_0_15px_rgba(255,102,0,0.8)]"></span>
            <span className="text-primary font-display tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-sm font-black text-glow">
              Est. 2016 • Salem, TN
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-white leading-[0.85] md:leading-[0.8] mb-8 md:mb-12 uppercase tracking-tighter"
          >
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-yellow-500 drop-shadow-[0_10px_40px_rgba(255,102,0,0.3)]">
              Landmark
            </span> <br />
            For Bikers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300/90 mb-12 max-w-2xl leading-relaxed font-light tracking-wide backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/5"
          >
            Premium Pre-Owned Superbikes • Specialist Gear & Accessories • Expert Maintenance & Tuning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="clip-skew bg-primary text-primary-foreground hover:bg-primary/90 font-display text-xl h-14 px-8 uppercase tracking-wider group"
              onClick={() => document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Inventory
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="clip-skew border-2 border-white/20 hover:border-primary hover:bg-primary/10 text-white font-display text-xl h-14 px-8 uppercase tracking-wider transition-all"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-display">Scroll</span>
        <ChevronDown className="text-primary animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
