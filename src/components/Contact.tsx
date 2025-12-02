import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me gustaría hablar sobre los servicios de La Real");
    window.open(`https://wa.me/573162732285?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-secondary text-secondary-foreground" id="contact">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center mb-6">
          ¿Listo para hacerlo <span className="text-primary">real?</span>
        </h2>
        
        <p className="text-center text-xl mb-12 text-secondary-foreground/80">
          Conversemos sobre tu proyecto
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background text-foreground border-border rounded-xl"
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background text-foreground border-border rounded-xl"
            />
            <Textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background text-foreground border-border rounded-xl min-h-[150px]"
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full"
              size="lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar mensaje
            </Button>
          </form>

          <div className="flex flex-col justify-center items-center p-8 bg-background rounded-3xl">
            <MessageCircle className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              ¿Prefieres WhatsApp?
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Escríbele directamente a Andrés
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold rounded-full"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Escribir a Andrés
            </Button>
          </div>
        </div>

        <footer className="text-center pt-8 border-t border-secondary-foreground/20">
          <p className="text-secondary-foreground/80">
            <span className="font-bold">La Real</span> - Agencia de Comunicación
          </p>
          <p className="text-secondary-foreground/60 mt-2">
            Bogotá, Colombia
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
