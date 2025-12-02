import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, User, Mic, Smartphone, Video } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Estrategia y comunicación",
      icon: Target,
      services: [
        "Marketing político",
        "Diseño de estrategia",
        "Comunicación corporativa"
      ]
    },
    {
      title: "Gestión de redes sociales",
      icon: Smartphone,
      services: [
        "Comunicación digital",
        "Escucha social",
        "Free press",
        "Relacionamiento público"
      ]
    },
    {
      title: "Producción audiovisual",
      icon: Video,
      services: [
        "Realización de contenido",
        "Diseño web",
        "Diseño gráfico"
      ]
    },
    {
      title: "Marketing y branding",
      icon: User,
      services: [
        "Construcción de personaje público",
        "Identidad y marca personal",
        "Concepto creativo"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-black" id="services">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center mb-16 text-white">
          Nuestras <span className="text-primary">asesorías</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl group bg-black"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span className="text-white">{service}</span>
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
