import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Inventory", href: "#inventory" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b flex items-center ${isScrolled
        ? "bg-black/90 backdrop-blur-xl border-white/10 h-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        : "bg-transparent border-transparent h-24"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary clip-skew flex items-center justify-center text-primary-foreground font-display font-black text-xl sm:text-2xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,102,0,0.4)] relative">
                BC
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tighter leading-none text-white group-hover:text-primary transition-colors uppercase">
                  BIKERS CAFE
                </span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-0.5 sm:mt-1">
                  Salem • Est. 2016
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center h-full">
            <div className="flex items-center space-x-10 h-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-sm uppercase tracking-[0.2em] font-bold text-gray-300 hover:text-primary transition-all duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,102,0,0.8)]"></span>
                </a>
              ))}
              <Button
                className="bg-primary text-primary-foreground hover:bg-white hover:text-black font-display font-black text-xs h-12 px-8 uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] ml-4"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inquire Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 font-display text-xl text-foreground hover:text-primary border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-primary text-primary-foreground font-display text-xl h-12 uppercase"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
