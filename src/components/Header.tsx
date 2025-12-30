import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo + Title */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-button">
            R
          </div>
          <span className="text-xl md:text-2xl font-bold text-foreground">
            Reysa S.L.
          </span>
        </a>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ctaOutline" size="lg" asChild>
            <a href="#contacto">
              <FileText className="w-5 h-5" />
              Presupuesto Gratis
            </a>
          </Button>
          <Button variant="cta" size="lg" asChild>
            <a href="tel:605165372">
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-4 px-4 space-y-3 animate-fade-in">
          <Button variant="cta" size="lg" className="w-full" asChild>
            <a href="tel:605165372">
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </Button>
          <Button variant="ctaOutline" size="lg" className="w-full" asChild>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              <FileText className="w-5 h-5" />
              Presupuesto Gratis
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
