import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Inventory } from "@/components/sections/inventory";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Inventory />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
