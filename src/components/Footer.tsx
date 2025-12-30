import { Phone, MapPin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-2xl">
                R
              </div>
              <span className="text-2xl font-bold">Reysa S.L.</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6 max-w-md">
              Servicios profesionales de limpieza y mantenimiento en Madrid. 
              Comprometidos con la excelencia, la puntualidad y la satisfacción 
              total de nuestros clientes.
            </p>
            <div className="flex gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:605165372">
                  <Phone className="w-5 h-5" />
                  Llamar
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-background/10 text-background hover:bg-background/20 border border-background/20"
                asChild
              >
                <a href="#contacto">
                  <FileText className="w-5 h-5" />
                  Presupuesto
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-background/70 hover:text-background transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:605165372" 
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  605 16 53 72
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Calle Valle Inclán 97, 9 F<br />
                    28044 Madrid
                  </span>
                </div>
              </li>
              <li>
                <a 
                  href="mailto:info@reysa.es" 
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@reysa.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © 2025 Reysa S.L. Todos los derechos reservados. Madrid, España.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
