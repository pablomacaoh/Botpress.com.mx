import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      {/* Animated wave layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-primary/40 via-transparent to-accent/40 animate-wave blur-2xl"></div>
        </div>
        <div className="absolute inset-0 opacity-50">
          <div className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-gradient-to-tl from-accent/50 via-transparent to-primary/50 animate-wave-reverse blur-2xl"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl animate-float opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-card rounded-full border border-primary/20">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Impulsado por IA Avanzada</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Transforma Tu Negocio con Bots de WhatsApp
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Crea asistentes inteligentes que entienden, responden y resuelven las necesidades de tus clientes 24/7. 
            Sin código, sin complicaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contacto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Configuración en minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Soporte en español</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
