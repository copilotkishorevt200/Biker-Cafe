import { motion } from "framer-motion";
import { Bike, ShoppingBag, Wrench, Truck, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Bike,
    title: "Pre-Owned Superbikes",
    description: "Buy, sell, or exchange premium condition superbikes with complete background verification."
  },
  {
    icon: ShoppingBag,
    title: "Spares & Accessories",
    description: "Genuine OEM parts and high-performance aftermarket upgrades for all major brands."
  },
  {
    icon: ShieldCheck,
    title: "Premium Riding Gear",
    description: "Helmets, jackets, gloves, and boots from world-renowned safety brands."
  },
  {
    icon: Wrench,
    title: "Service & Repair",
    description: "Specialized tuning, periodic maintenance, and expert diagnostics by certified mechanics."
  },
  {
    icon: Truck,
    title: "Nationwide Shipping",
    description: "Secure, insured transport of bikes and parts to any location across India."
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "ECU remaps, exhaust systems, and dyno-tested performance enhancements."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-0.5 w-8 bg-primary"></span>
            <h3 className="text-primary font-display tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
              What We Do
            </h3>
            <span className="h-0.5 w-8 bg-primary"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted-foreground">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-500 group h-full rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(255,102,0,0.15)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-inner">
                    <service.icon size={32} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed flex-grow font-light group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
