import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ImplantesSection from "@/components/ImplantesSection";
import HOFSection from "@/components/HOFSection";
import ClinicSection from "@/components/ClinicSection";
import AboutSection from "@/components/AboutSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <ImplantesSection />
      <HOFSection />
      <ClinicSection />
      <AboutSection />
      <WhatsAppCTA />
      <Footer />
    </main>
  );
}
