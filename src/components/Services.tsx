import { Sparkles, Home, ChefHat, Building2 } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Post-Obra",
    benefits: [
      "Eliminación completa de polvo y residuos",
      "Tratamiento especializado de superficies",
      "Resultados impecables garantizados",
      "Preparación perfecta para estrenar"
    ]
  },
  {
    icon: Home,
    title: "Limpieza Integral de Viviendas",
    benefits: [
      "Limpieza profunda de cada rincón",
      "Atención al detalle extraordinaria",
      "Productos profesionales adecuados",
      "Espacios que brillan"
    ]
  },
  {
    icon: ChefHat,
    title: "Cocinas y Cristales",
    benefits: [
      "Desengrasado profesional",
      "Cristales sin marcas ni huellas",
      "Superficies relucientes",
      "Acabados perfectos"
    ]
  },
  {
    icon: Building2,
    title: "Comunidades y Oficinas",
    benefits: [
      "Mantenimiento regular programado",
      "Espacios comunes impecables",
      "Flexibilidad horaria",
      "Servicio puntual y fiable"
    ]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluciones de Limpieza para Cada Necesidad
          </h2>
          <p className="text-muted-foreground text-lg">
            Servicios profesionales adaptados a particulares y empresas en Madrid
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-elegant hover:border-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Benefits */}
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
