import { Brain, Palette, Network, BarChart3, Workflow, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Integración Avanzada de IA",
    description: "Usa los últimos modelos de lenguaje natural para crear respuestas con comprensión casi humana.",
  },
  {
    icon: Palette,
    title: "Constructor Visual Fácil",
    description: "Interfaz intuitiva de arrastrar y soltar para crear bots sin necesidad de programar.",
  },
  {
    icon: Network,
    title: "Integración Multicanal",
    description: "Conecta tu bot de WhatsApp con web chat, Facebook Messenger y más para una experiencia consistente.",
  },
  {
    icon: BarChart3,
    title: "Analíticas Accionables",
    description: "Obtén insights profundos sobre las interacciones con clientes y mejora el engagement con decisiones basadas en datos.",
  },
  {
    icon: Workflow,
    title: "Flujos de Trabajo Personalizados",
    description: "Diseña caminos conversacionales intrincados que guían a los clientes a través de procesos específicos.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Encriptación de datos de extremo a extremo y cumplimiento con estándares internacionales de protección de datos.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Herramientas Poderosas para Bots Inteligentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma ofrece todas las herramientas necesarias para crear bots inteligentes y responsivos 
            que enganchan a los clientes y optimizan operaciones.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
