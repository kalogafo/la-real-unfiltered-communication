import { Button } from "@/components/ui/button";
import logoLaReal from "@/assets/logo-lareal.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="container max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <img 
            src={logoLaReal} 
            alt="La Real - Agencia de Comunicación" 
            className="h-44 md:h-56 lg:h-64 w-auto animate-scale-in"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight">
          Comunicación creativa,{" "}
          <span className="text-primary">sin filtros.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-medium">
          Estrategia, entrenamiento y producción para conectar en el mundo real.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Hagámoslo real
        </Button>
      </div>
    </section>
  );
};

export default Hero;
