import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production, this would send to an edge function
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });
    }, 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-burgundy-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para ayudarte. Contáctanos sin compromiso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Llámanos</p>
                  <a 
                    href="tel:605165372" 
                    className="text-2xl md:text-3xl font-bold text-primary hover:text-burgundy-dark transition-colors"
                  >
                    605 16 53 72
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Dirección</p>
                  <p className="font-semibold text-foreground">
                    Calle Valle Inclán 97, 9 F
                  </p>
                  <p className="text-foreground">28044 Madrid</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Horario</p>
                  <p className="font-semibold text-foreground">Lunes - Viernes</p>
                  <p className="text-foreground">8:00 - 20:00</p>
                  <p className="font-semibold text-foreground mt-2">Sábados</p>
                  <p className="text-foreground">9:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d-3.75!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ4LjAiTiAzwrA0NScwMC4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Reysa S.L."
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card h-fit">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Solicita tu Presupuesto Gratis
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold text-foreground mb-2">
                  ¡Mensaje Enviado!
                </p>
                <p className="text-muted-foreground">
                  Nos pondremos en contacto contigo muy pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email (opcional)"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Servicio
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="post-obra">Limpieza Post-Obra</option>
                    <option value="integral">Limpieza Integral de Viviendas</option>
                    <option value="cocinas-cristales">Cocinas y Cristales</option>
                    <option value="comunidades">Comunidades y Oficinas</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Solicitud
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad. 
                  Tus datos serán tratados de forma confidencial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
