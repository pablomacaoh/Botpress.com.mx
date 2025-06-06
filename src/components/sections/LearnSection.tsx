
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Primeros Pasos con WhatsBot AI",
    description: "Aprende lo básico para crear tu primer bot de WhatsApp en menos de 30 minutos.",
    type: "guide",
    duration: "30 min de lectura",
    level: "Principiante",
  },
  {
    title: "Flujos de Conversación Avanzados",
    description: "Diseña caminos de conversación complejos que guíen a los usuarios de manera natural.",
    type: "guide",
    duration: "45 min de lectura",
    level: "Intermedio",
  },
  {
    title: "Integrando APIs Externas",
    description: "Conecta tu bot con servicios de terceros para expandir la funcionalidad.",
    type: "tutorial",
    duration: "60 min de lectura",
    level: "Avanzado",
  },
  {
    title: "Mejores Prácticas de Entrenamiento de IA",
    description: "Optimiza las capacidades de aprendizaje de tu bot para obtener mejores respuestas.",
    type: "guide",
    duration: "40 min de lectura",
    level: "Intermedio",
  },
  {
    title: "Analíticas y Optimización",
    description: "Aprende a analizar datos de conversación para mejorar el rendimiento de tu bot.",
    type: "tutorial",
    duration: "55 min de lectura",
    level: "Avanzado",
  },
  {
    title: "WhatsBot para E-commerce",
    description: "Configura catálogos de productos y optimiza experiencias de compra.",
    type: "tutorial",
    duration: "50 min de lectura",
    level: "Intermedio",
  },
];

const ResourceCard = ({ item }) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            item.level === 'Principiante' ? 'bg-green-100 text-green-800' : 
            item.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {item.level}
          </span>
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {item.duration}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Leer Ahora</Button>
      </CardFooter>
    </Card>
  );
};

const LearnSection = () => {
  return (
    <section className="py-16 md:py-24" id="learn">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Aprende a Construir Mejores Bots</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explora nuestros recursos completos para dominar el arte de crear bots de WhatsApp inteligentes y efectivos para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, i) => (
            <ResourceCard key={i} item={item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-purple-gradient hover:opacity-90 px-6">
            Ver Todos los Recursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
