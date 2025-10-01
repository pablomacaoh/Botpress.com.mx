import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Primeros Pasos con WhatsBot AI",
    description: "Aprende lo básico para crear tu primer bot de WhatsApp en menos de 30 minutos.",
    type: "guide",
    duration: "30 min de lectura",
    level: "Principiante",
    levelColor: "bg-green-500/10 text-green-700 border-green-500/20",
  },
  {
    title: "Flujos de Conversación Avanzados",
    description: "Diseña caminos de conversación complejos que guíen a los usuarios de manera natural.",
    type: "guide",
    duration: "45 min de lectura",
    level: "Intermedio",
    levelColor: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  },
  {
    title: "Integrando APIs Externas",
    description: "Conecta tu bot con servicios de terceros para expandir la funcionalidad.",
    type: "tutorial",
    duration: "60 min de lectura",
    level: "Avanzado",
    levelColor: "bg-red-500/10 text-red-700 border-red-500/20",
  },
  {
    title: "Mejores Prácticas de Entrenamiento de IA",
    description: "Optimiza las capacidades de aprendizaje de tu bot para obtener mejores respuestas.",
    type: "guide",
    duration: "40 min de lectura",
    level: "Intermedio",
    levelColor: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  },
  {
    title: "Analíticas y Optimización",
    description: "Aprende a analizar datos de conversación para mejorar el rendimiento de tu bot.",
    type: "tutorial",
    duration: "55 min de lectura",
    level: "Avanzado",
    levelColor: "bg-red-500/10 text-red-700 border-red-500/20",
  },
  {
    title: "WhatsBot para E-commerce",
    description: "Configura catálogos de productos y optimiza experiencias de compra.",
    type: "tutorial",
    duration: "50 min de lectura",
    level: "Intermedio",
    levelColor: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  },
];

export const Learn = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Aprende a Construir Mejores Bots
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros recursos completos para dominar el arte de crear bots de WhatsApp 
            inteligentes y efectivos para tu negocio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className={resource.levelColor}>
                    {resource.level}
                  </Badge>
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Leer Ahora →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos los Recursos
          </Button>
        </div>
      </div>
    </section>
  );
};
