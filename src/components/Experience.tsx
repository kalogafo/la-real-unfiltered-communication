import nestleImg from "@/assets/clients/nestle.jpg";
import tigoImg from "@/assets/clients/tigo.jpg";
import rhenusImg from "@/assets/clients/rhenus.jpg";
import sonyImg from "@/assets/clients/sony.jpg";

const Experience = () => {
  const clients = [
    { name: "Nestlé", logo: nestleImg },
    { name: "Tigo", logo: tigoImg },
    { name: "Rhenus Logistics", logo: rhenusImg },
    { name: "Sony Music", logo: sonyImg }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-16">
          Han confiado en <span className="text-primary">nosotros</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-muted rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-auto max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
