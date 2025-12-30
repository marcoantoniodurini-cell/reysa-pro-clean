import { Award, Eye, Heart, Clock, Droplets, Zap } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Profesionalidad",
    description: "Equipo cualificado con años de experiencia en el sector"
  },
  {
    icon: Eye,
    title: "Atención al Detalle",
    description: "Cada rincón cuenta. Resultados que superan expectativas"
  },
  {
    icon: Heart,
    title: "Trato Amable",
    description: "Cercanía y respeto en cada visita a tu hogar o negocio"
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Valoramos tu tiempo. Siempre llegamos a la hora acordada"
  },
  {
    icon: Droplets,
    title: "Productos Adecuados",
    description: "Utilizamos productos profesionales para cada superficie"
  },
  {
    icon: Zap,
    title: "Respuesta Rápida",
    description: "Presupuesto y disponibilidad en menos de 24 horas"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-burgundy-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Nos Diferencia
          </h2>
          <p className="text-muted-foreground text-lg">
            Valores que nuestros clientes destacan una y otra vez
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card transition-all duration-300 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
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

export default WhyChooseUs;
