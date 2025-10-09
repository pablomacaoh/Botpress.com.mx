import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Wrench, ArrowRight, Check } from "lucide-react";

const offeringFeatures = {
  platform: [
    "Acceso completo a la consola Botpress",
    "Planes flexibles según tu necesidad",
    "Actualizaciones automáticas",
    "Soporte técnico incluido",
  ],
  services: [
    "Diseño personalizado de flujos conversacionales",
    "Integración con tus sistemas existentes",
    "Entrenamiento de IA específico para tu negocio",
    "Mantenimiento y optimización continua",
  ],
};

export const Offerings = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Qué Ofrecemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te brindamos dos soluciones complementarias para que tu negocio aproveche 
            al máximo el poder de los bots de WhatsApp con IA
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Offering 1: Platform Access */}
          <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
            
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                    OPCIÓN 1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Acceso a la Plataforma
                  </h3>
                  <p className="text-muted-foreground">
                    Licencias de la consola Botpress
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed">
                Adquiere tu licencia de acceso a la plataforma Botpress y construye 
                tus propios bots con la herramienta más potente del mercado.
              </p>
              
              <div className="space-y-3 mb-8">
                {offeringFeatures.platform.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-card rounded-lg p-4 mb-6 border border-primary/20">
                <p className="text-sm font-medium text-center">
                  <span className="text-muted-foreground">Planes desde</span>
                  <span className="text-2xl font-bold text-primary mx-2">MXN 2,000</span>
                  <span className="text-muted-foreground">mensuales</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Offering 2: Services */}
          <Card className="group relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-card">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-accent"></div>
            
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0 shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-2">
                    OPCIÓN 2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Servicios Profesionales
                  </h3>
                  <p className="text-muted-foreground">
                    Desarrollo a la medida de tu asistente IA
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed">
                Deja que nuestro equipo experto diseñe, desarrolle y optimice 
                tu asistente de WhatsApp con IA completamente personalizado.
              </p>
              
              <div className="space-y-3 mb-8">
                {offeringFeatures.services.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-card rounded-lg p-4 mb-6 border border-secondary/20">
                <p className="text-sm font-medium text-center">
                  <span className="text-muted-foreground">Cotización personalizada según</span>
                  <span className="block text-lg font-bold text-secondary mt-1">
                    Alcance y Complejidad del Proyecto
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block bg-background/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                💡 <span className="font-medium text-foreground">¿No estás seguro cuál elegir?</span> 
                <span className="mx-2">•</span>
                Puedes combinar ambas opciones para obtener el máximo valor
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
