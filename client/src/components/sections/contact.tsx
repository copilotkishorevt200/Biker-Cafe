import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Star, Clock } from "lucide-react";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-8 bg-primary"></span>
                <h3 className="text-primary font-display tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
                  Get In Touch
                </h3>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
                Visit <span className="text-muted-foreground">The Cafe</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                Drop by to explore our latest collection, get your bike serviced, or simply talk motorcycles.
              </p>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-5 bg-black/40 backdrop-blur-md p-5 sm:p-6 border border-white/10 rounded-2xl mb-10 max-w-sm shadow-xl hover:shadow-[0_0_20px_rgba(255,102,0,0.15)] transition-shadow duration-300">
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-orange-500 text-white p-2 sm:p-3 rounded-xl w-14 h-14 sm:w-16 sm:h-16 shadow-[0_0_15px_rgba(255,102,0,0.5)]">
                <span className="font-display text-xl sm:text-2xl font-black">3.8</span>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current drop-shadow-md" />
              </div>
              <div>
                <h4 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide">Google Rating</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">Based on 636 reviews</p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-inner">
                  <MapPin className="text-gray-400 group-hover:text-primary transition-colors duration-300 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">Location</h4>
                  <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">Anna Salai Road, Swarnapuri<br />Salem, Tamil Nadu 636004</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-inner">
                  <Phone className="text-gray-400 group-hover:text-primary transition-colors duration-300 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">Call Us</h4>
                  <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">+91 96777 11992<br />+91 70105 71262</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-inner">
                  <Clock className="text-gray-400 group-hover:text-primary transition-colors duration-300 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">Hours</h4>
                  <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-12 relative shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />

            <h3 className="text-3xl font-display font-black text-white uppercase mb-8 tracking-tight drop-shadow-md">Connect on <span className="text-[#25D366]">WhatsApp</span></h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => {
                  const message = `Name: ${data.name}%0APhone: ${data.phone}%0AMessage: ${data.message}`;
                  window.open(`https://wa.me/919677711992?text=${message}`, '_blank');
                  onSubmit(data);
                })}
                className="space-y-6 relative z-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300 font-semibold uppercase text-xs tracking-widest">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary h-14 rounded-xl shadow-inner transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300 font-semibold uppercase text-xs tracking-widest">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary h-14 rounded-xl shadow-inner transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300 font-semibold uppercase text-xs tracking-widest">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I'm looking for a Kawasaki Z900..."
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary min-h-[140px] rounded-xl resize-none shadow-inner transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full rounded-xl bg-gradient-to-r from-[#25D366] to-[#1da851] hover:from-[#20ba56] hover:to-[#178f43] text-white font-display text-xl tracking-widest uppercase h-16 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 mt-6"
                >
                  {mutation.isPending ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
