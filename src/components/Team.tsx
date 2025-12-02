import { Card, CardContent } from "@/components/ui/card";
import andresImg from "@/assets/team/andres.jpg";
import angieImg from "@/assets/team/angie.jpg";
import crisImg from "@/assets/team/cris.jpg";
import karenImg from "@/assets/team/karen.jpg";

const Team = () => {
  const team = [
    {
      name: "Andrés Gómez",
      role: "Estrategia Política y Relacionamiento",
      image: andresImg
    },
    {
      name: "Angie Robles",
      role: "Comunicación, Actriz y Entrenamiento de Voceros",
      image: angieImg
    },
    {
      name: "Cristian Quiñones",
      role: "Producción Audiovisual",
      image: crisImg
    },
    {
      name: "Karen García",
      role: "Directora de Arte e Identidad Visual",
      image: karenImg
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted" id="team">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center mb-8">
          Quiénes <span className="text-primary">somos</span>
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-4xl mx-auto text-center mb-16">
          Nacimos en el corazón de los barrios. De ahí viene nuestra fuerza: somos La Real, comunicadores con raíces populares. Creemos que la mejor creatividad nace de la vida real, de las luchas y los sueños de la gente.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl rounded-2xl text-center group"
            >
              <CardContent className="pt-8 pb-6">
                <div className="mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
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
