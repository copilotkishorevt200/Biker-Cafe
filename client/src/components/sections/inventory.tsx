import { motion } from "framer-motion";
import { ArrowRight, Calendar, Gauge, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    title: "Honda CBR1000RR Fireblade",
    type: "Superbike",
    specs: ["1000cc Inline-Four", "189 HP", "Immaculate Condition"],
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop", // {/* red sport bike parked */}
    tag: "Just Arrived"
  },
  {
    title: "Kawasaki Z900 2026 Edition",
    type: "Accessories & Upgrades",
    specs: ["Full System Exhausts", "Carbon Fiber Panels", "Performance ECU"],
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2069&auto=format&fit=crop", // {/* green kawasaki motorcycle aesthetic */}
    tag: "Featured Gear"
  }
];

export function Inventory() {
  return (
    <section id="inventory" className="py-20 sm:py-32 bg-zinc-950 relative border-t border-b border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full biker-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-0.5 w-8 bg-primary"></span>
              <h3 className="text-primary font-display tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
                Showcase
              </h3>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase"
            >
              Inventory <span className="text-muted-foreground">Highlights</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,102,0,0.15)] transition-all duration-500"
            >
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-gradient-to-r from-primary to-orange-500 text-white font-display px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,102,0,0.5)]">
                  {item.tag}
                </span>
              </div>

              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              <div className="p-6 md:p-8 relative z-20 -mt-20 md:-mt-24">
                <h4 className="text-primary font-display text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 md:mb-3 font-semibold drop-shadow-md">
                  {item.type}
                </h4>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-6 md:mb-8 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {item.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex flex-row sm:flex-col items-center justify-start sm:justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-left sm:text-center group-hover:bg-white/10 transition-colors duration-300 gap-3 sm:gap-0">
                      {i === 0 && <Cog className="text-orange-400 mb-0 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />}
                      {i === 1 && <Gauge className="text-orange-400 mb-0 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />}
                      {i === 2 && <Calendar className="text-orange-400 mb-0 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />}
                      <span className="text-[10px] sm:text-[11px] text-gray-300 font-medium tracking-wide uppercase">{spec}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    const message = `Hi, I'm interested in the ${item.title} (${item.type}).`;
                    window.open(`https://wa.me/919677711992?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full rounded-xl bg-gradient-to-r from-[#25D366] to-[#1da851] hover:from-[#20ba56] hover:to-[#178f43] text-white font-display text-lg tracking-widest uppercase h-14 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  Inquire on WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
