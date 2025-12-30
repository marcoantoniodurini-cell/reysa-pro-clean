import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Fade-in animation on scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Reysa S.L. - Limpieza y Pintura Profesional en Madrid | Presupuesto Gratis</title>
      <meta 
        name="description" 
        content="Servicios profesionales de limpieza y pintura en Madrid. Limpieza post-obra, pintura interior/exterior, viviendas y comunidades. ⭐ 5.0 en Google. Presupuesto gratis." 
      />

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <CTASection />
          <Contact />
        </main>
        <Footer />
        <MobileFloatingCTA />
      </div>
    </>
  );
};

export default Index;
