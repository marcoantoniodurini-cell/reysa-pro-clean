import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jose Rodriguez",
    text: "Les he contratado para que me realizaran la limpieza de cocina y cristales. Nunca los había tenido tan limpios. Muy trabajadores, muy amables, muy cuidadosos con las normas de seguridad.",
    rating: 5
  },
  {
    name: "Elisa Vázquez",
    text: "Realizaron la limpieza integral de mi piso con total profesionalidad y unos resultados impecables. Quiero destacar su amabilidad, rápida respuesta y excelente atención al cliente. Los llamé de un día para otro y hicieron todo lo posible por atenderme.",
    rating: 5
  },
  {
    name: "Lucía Taberna",
    text: "Contraté los servicios después de una obra integral en mi casa. Después de pedir varios presupuestos les elegí por su relación calidad precio. Son gente puntual, responsable. Me gusta su minuciosidad.",
    rating: 5
  },
  {
    name: "Manuel Iglesias Hernández",
    text: "Por segunda vez hemos solicitado sus servicios y, al igual que en la primera ocasión, hemos quedado satisfechos con el trabajo realizado por sus operarios y con la buena disposición de los mismos. Recomendamos su empresa.",
    rating: 5
  },
  {
    name: "Ana",
    text: "Entendieron desde el primer momento lo que necesitaba y el resultado fue realmente espectacular. Destaco su seriedad y profesionalidad. Conocen y cuidan al detalle cualquier tipo de superficie utilizando productos específicos. Lo recomiendo 100%.",
    rating: 5
  },
  {
    name: "Verónica Lara Boto",
    text: "He contratado una limpieza de un piso después de una obra integral y he quedado muy satisfecha con el resultado. Destacaría la atención al detalle, radiadores y rincones difíciles. Sin duda les recomiendo.",
    rating: 5
  },
  {
    name: "Antonio Carmona",
    text: "Atienden con gran profesionalidad y te asesoran perfectamente. Realizan un trabajo meticuloso y atienden a tus necesidades sin pasarse en los precios. Tienen detalles de una gran calidad humana. He quedado muy satisfecho.",
    rating: 5
  },
  {
    name: "Cristina Brita",
    text: "Teresa y su equipo son unos auténticos profesionales. El piso quedó impoluto. Los recomiendo 100%. Además, son majísimos.",
    rating: 5
  },
  {
    name: "Carlos Orihuela",
    text: "Grandes profesionales y detallistas. Dejaron impecable el piso, volvería a contratar sus servicios. Los recomiendo sin lugar a duda.",
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
