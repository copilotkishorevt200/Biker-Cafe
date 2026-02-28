import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary clip-skew flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                BC
              </div>
              <span className="font-display font-bold text-2xl tracking-wide text-white">
                BIKERS CAFE
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The ultimate landmark for bikers since 2016. Salem's premier destination for pre-owned superbikes, premium gear, and expert service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors clip-skew">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors clip-skew">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#inventory" className="text-muted-foreground hover:text-primary transition-colors">Current Inventory</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl text-white mb-6 uppercase tracking-wider">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span>Anna Salai Road, Swarnapuri<br />Salem, Tamil Nadu 636004</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 96777 11992<br />+91 70105 71262</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Bikers Cafe Salem. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-display text-primary">EST. 2016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
