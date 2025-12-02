import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, User, Mic, Smartphone, Video } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Estrategia y Política",
      icon: Target,
      services: [
        "Alineamiento de Estrategia",
        "Marketing Político",
        "Asesoramiento de Campañas"
      ]
    },
    {
      title: "Identidad y Personaje",
      icon: User,
      services: [
        "Construcción de Personaje Público",
        "Identidad y Marca Personal",
        "Concepto Comunicativo"
      ]
    },
    {
      title: "Entrenamiento (The 'Angie' Factor)",
      icon: Mic,
      services: [
        "Oratoria y Comunicación No Verbal",
        "Convencimiento",
        "Coaching para Equipos de Campaña"
      ]
    },
    {
      title: "Digital y PR",
      icon: Smartphone,
      services: [
        "Comunicación Digital (Redes)",
        "Escucha Social",
        "Free Press",
        "Relacionamiento"
      ]
    },
    {
      title: "Producción",
      icon: Video,
      services: [
        "Producción Audiovisual",
        "Diseño Web y Gráfico"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="services">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center mb-16">
          Lo que <span className="text-primary">hacemos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl group"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span className="text-card-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
