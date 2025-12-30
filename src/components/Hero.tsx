import { Button } from "@/components/ui/button";
import { Phone, FileText, Star, ShieldCheck, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-burgundy-light to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-card mb-8 fade-in">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              5.0 · Opiniones verificadas en Google
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 fade-in fade-in-delay-1">
            Limpieza y Pintura{" "}
            <span className="text-primary">Profesional en Madrid</span>
          </h1>

          {/* Subtitle from reviews */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 fade-in fade-in-delay-2">
            "Trabajo impecable, atención al detalle extraordinaria y trato excelente" 
            — Así nos describen nuestros clientes
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in fade-in-delay-3">
            <Button variant="cta" size="xl" asChild>
              <a href="tel:605165372">
                <Phone className="w-5 h-5" />
                Llamar: 605 16 53 72
              </a>
            </Button>
            <Button variant="ctaOutline" size="xl" asChild>
              <a href="#contacto">
                <FileText className="w-5 h-5" />
                Presupuesto Gratis
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 fade-in fade-in-delay-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Profesionales cualificados</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Garantía de calidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
