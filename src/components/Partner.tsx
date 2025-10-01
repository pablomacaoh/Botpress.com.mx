import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Award, HeadphonesIcon } from "lucide-react";

export const Partner = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
              Partner Oficial
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Partner Certificado de Botpress
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              BPMx es socio oficial de Botpress.com, brindando soporte especializado 
              y servicios profesionales en México y Latinoamérica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-primary/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Alianza Estratégica</h3>
                <p className="text-sm text-muted-foreground">
                  Trabajamos directamente con Botpress para ofrecerte la mejor experiencia
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-primary/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Certificación Oficial</h3>
                <p className="text-sm text-muted-foreground">
                  Equipo certificado en la plataforma Botpress con experiencia comprobada
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-primary/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Soporte Local</h3>
                <p className="text-sm text-muted-foreground">
                  Atención personalizada en español con conocimiento del mercado local
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-primary text-white border-0 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                La Confianza de Botpress, el Servicio de BPMx
              </h3>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Obtén todas las ventajas de la plataforma líder en bots conversacionales, 
                respaldado por nuestro equipo local especializado en onboarding, capacitación 
                y soporte técnico continuo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
