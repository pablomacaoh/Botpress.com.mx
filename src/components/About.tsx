import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe, UsersRound } from "lucide-react";

const stats = [
  {
    icon: Building2,
    label: "Fundada",
    value: "2021",
  },
  {
    icon: Users,
    label: "Clientes",
    value: "1,000+",
  },
  {
    icon: Globe,
    label: "Países",
    value: "30",
  },
  {
    icon: UsersRound,
    label: "Tamaño del Equipo",
    value: "50",
  },
];

export const About = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sobre WhatsBot AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Democratizar la IA para empresas de todos los tamaños a través de tecnología 
              accesible de bots de WhatsApp.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-card border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-center md:text-left">
                <p className="text-lg leading-relaxed">
                  WhatsBot AI es un líder en rápido crecimiento en soluciones inteligentes de bots de WhatsApp, 
                  ayudando a las empresas a transformar sus estrategias de engagement con clientes.
                </p>
                <p className="text-lg leading-relaxed">
                  Nuestro equipo diverso de expertos en IA, desarrolladores y estrategas está unido por un objetivo 
                  común: hacer que la IA conversacional sea accesible para todas las empresas, sin importar su tamaño.
                </p>
                <p className="text-lg leading-relaxed">
                  Estamos orgullosos del uso impactante de nuestra tecnología, desde pequeños negocios locales 
                  hasta empresas globales en más de 30 países.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <Button variant="default" size="lg">
                    Conoce Nuestro Equipo
                  </Button>
                  <Button variant="outline" size="lg">
                    Nuestros Valores
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
