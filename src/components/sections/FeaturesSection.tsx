
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Integración Avanzada de IA",
    description: "Aprovecha los modelos de lenguaje natural de última generación para crear bots que entiendan y respondan a las consultas de los clientes con precisión similar a la humana.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Constructor Visual Fácil",
    description: "Crea bots sofisticados de WhatsApp con nuestra intuitiva interfaz de arrastrar y soltar. No se requiere codificación, lo que hace que la creación de bots sea accesible para todos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Integración Multicanal",
    description: "Conecta tu bot de WhatsApp con otras plataformas como chat web, Facebook Messenger y más para una experiencia consistente con el cliente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Analíticas Accionables",
    description: "Obtén información sobre las interacciones con los clientes, sigue el rendimiento de tu bot y toma decisiones basadas en datos para mejorar la participación.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Flujos de Trabajo Personalizados",
    description: "Diseña caminos de conversación intrincados que guíen a los clientes a través de viajes específicos, asegurando que obtengan la información que necesitan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Seguridad Empresarial",
    description: "Descansa tranquilo sabiendo que los datos de tus clientes están protegidos con cifrado de extremo a extremo y cumplimiento de los estándares internacionales de protección de datos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Transforma Tu Negocio con Bots de WhatsApp Impulsados por IA</h2>
          <p className="text-lg text-gray-600">
            Nuestra plataforma ofrece todas las herramientas que necesitas para crear bots inteligentes y receptivos que involucren a tus clientes y optimicen tus operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
