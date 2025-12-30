import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    text: "Trabajo impecable. Dejaron mi piso post-obra como nuevo. Muy profesionales y atentos a cada detalle. Totalmente recomendables.",
    rating: 5
  },
  {
    name: "Carlos Martínez",
    text: "Excelente servicio de limpieza integral. El trato fue muy amable desde el primer contacto. Sin duda repetiré.",
    rating: 5
  },
  {
    name: "Ana López",
    text: "Puntuales, profesionales y con productos de calidad. Mi cocina quedó reluciente. Muy satisfecha con el resultado.",
    rating: 5
  },
  {
    name: "Pedro Sánchez",
    text: "Contratamos la limpieza de la comunidad y el cambio ha sido notable. Espacios comunes impecables cada semana.",
    rating: 5
  },
  {
    name: "Laura Fernández",
    text: "Respuesta rápida al solicitar presupuesto y precio muy competitivo. El trabajo superó mis expectativas.",
    rating: 5
  },
  {
    name: "Miguel Rodríguez",
    text: "Atención al detalle extraordinaria. Limpiaron rincones que ni sabía que existían. Muy recomendables.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Opiniones reales de clientes satisfechos en Madrid
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 relative transition-all duration-300 hover:shadow-elegant hover:border-primary/20"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Cliente verificado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
