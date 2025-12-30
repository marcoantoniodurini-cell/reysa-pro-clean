import { Button } from "@/components/ui/button";
import { Phone, FileText, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-burgundy-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-8">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para un Espacio Impecable?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Solicita tu presupuesto gratuito y descubre la diferencia de trabajar con profesionales
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-elegant"
              asChild
            >
              <a href="tel:605165372">
                <Phone className="w-5 h-5" />
                Llamar: 605 16 53 72
              </a>
            </Button>
            <Button
              size="xl"
              className="bg-transparent border-2 border-white text-primary-foreground hover:bg-white/10 font-bold"
              asChild
            >
              <a href="#contacto">
                <FileText className="w-5 h-5" />
                Solicitar Presupuesto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
