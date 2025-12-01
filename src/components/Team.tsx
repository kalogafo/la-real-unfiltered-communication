import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Andrés Gómez",
      role: "Estrategia Política y Relacionamiento"
    },
    {
      name: "Angie Robles",
      role: "Comunicación, Actriz y Entrenamiento de Voceros"
    },
    {
      name: "Cristian Quiñones",
      role: "Producción Audiovisual"
    },
    {
      name: "Karen García",
      role: "Directora de Arte e Identidad Visual"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted" id="team">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center mb-16">
          Quiénes <span className="text-primary">somos</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl text-center group"
            >
              <CardContent className="pt-8 pb-6">
                <div className="mb-6 mx-auto w-32 h-32 rounded-full bg-muted border-4 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <User className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
