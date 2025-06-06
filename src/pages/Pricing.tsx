import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PricingNavbar from "@/components/layout/PricingNavbar";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricingPlans = [
    {
      name: "Plan Básico",
      monthlyPrice: "MXN $2,000",
      annualPrice: "MXN $22,000",
      annualDiscount: "MXN $2,000",
      description: "Perfecto para pequeños negocios que están comenzando",
      features: [
        "24/7 365 Disponibilidad",
        "$5 USD de crédito en llamadas a IA",
        "Respuestas instantáneas",
        "1 Bot incluido",
        "1 colaborador incluido",
        "1,000 renglones de tabla incluidos",
        "100MB de almacenamiento en BD Vectorizada",
        "500MB de almacenamiento de archivos",
        "Tono y personalidad de tu marca",
        "Historial de conversaciones",
        "Panel de rendimiento",
        "Soporte remoto",
      ],
      isPopular: false,
      buttonText: "Comenzar Ahora",
      buttonVariant: "outline" as const,
    },
    {
      name: "Plan Profesional",
      monthlyPrice: "MXN $5,000",
      annualPrice: "MXN $56,000",
      annualDiscount: "MXN $4,000",
      description: "Para negocios en crecimiento con necesidades específicas",
      features: [
        "Todo en Plan Básico",
        "Integración con CRM",
        "2 Bots incluidos",
        "2 colaboradores incluidos",
        "100,000 renglones de tabla incluidos",
        "1GB de almacenamiento en BD Vectorizada",
        "10GB de almacenamiento de archivos",
        "Remover la leyenda 'powered by Botpress'",
        "Mayores limites de uso",
        "Saludos personalizados",
        "Soporte multi-idioma",
        "Etiqueta blanca",
        "10,000 visitantes/mes",
      ],
      isPopular: true,
      buttonText: "Comenzar Ahora",
      buttonVariant: "default" as const,
    },
    {
      name: "Plan Empresarial",
      monthlyPrice: "Contactar",
      annualPrice: "Contactar",
      description: "Solución completa para empresas con alto volumen",
      features: [
        "Todo en Plan Profesional",
        "Personalización de onboarding",
        "Respuestas personalizadas",
        "Integraciones personalizadas",
        "Desarrollo a la medida",
        "CSM dedicado",
        "Desarrollo AI avanzado con RAG y bases vectorizadas",
      ],
      isPopular: false,
      buttonText: "Contáctanos",
      buttonVariant: "outline" as const,
    },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#contact');
  };

  const handlePlanClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PricingNavbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Precios Transparentes y Flexibles
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Elige el plan que mejor se adapte a las necesidades de tu negocio,
              con escalabilidad para crecer conforme lo hace tu empresa.
            </p>
            <br />
            <p className="text-xl text-gray-400 mb-8">
              Todas las licencias de Botpress pueden ser adquiridas directamente en Botpress.com, al hacerlo a través de BPMx ofrecemos servicio de onboarding y soporte.
            </p>
            <br />
            <p className="text-xl text-gray-400 mb-8">
              Todos los precios son en MXN.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <Button
                variant={billingCycle === "monthly" ? "default" : "outline"}
                onClick={() => setBillingCycle("monthly")}
                className="rounded-r-none"
              >
                Mensual
              </Button>
              <Button
                variant={billingCycle === "annual" ? "default" : "outline"}
                onClick={() => setBillingCycle("annual")}
                className="rounded-l-none"
              >
                Anual
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`flex flex-col ${plan.isPopular ? 'border-purple-500 shadow-lg shadow-purple-100/10' : ''}`}>
                {plan.isPopular && (
                  <div className="bg-purple-500 text-white py-1 px-4 text-xs font-medium tracking-wider text-center rounded-t-md">
                    MÁS POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    {plan.name !== "Plan Empresarial" ? (
                      <>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold">
                            {billingCycle === "monthly"
                              ? plan.monthlyPrice.split(' ')[1]
                              : plan.annualPrice.split(' ')[1]}
                          </span>
                          <span className="text-gray-400 ml-2">
                            /{billingCycle === "monthly" ? "mes" : "año"}
                          </span>
                        </div>
                        {billingCycle === "annual" && plan.annualDiscount && (
                          <div className="mt-2 text-gray-400 text-sm line-through">
                            {plan.annualDiscount}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-blue-500">
                        Contáctanos
                      </div>
                    )}
                  </div>
                  <CardDescription className="mt-3">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-2 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full ${plan.isPopular ? 'bg-purple-gradient hover:opacity-90' : ''} ${plan.name === "Plan Empresarial" ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}
                    onClick={handlePlanClick}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas una Solución Personalizada?</h2>
            <p className="text-gray-400 mb-8">
              Si buscas características específicas para tu industria o tienes requisitos
              especiales, podemos crear un plan a la medida de tus necesidades.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="w-full bg-bot-purple hover:bg-bot-purpleDark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Contactar para Plan Personalizado
            </Button>
          </div>

          <div className="mt-16 bg-gray-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="text-gray-400 mt-1">
                  Sí, puedes actualizar o reducir tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">¿Cómo se cuentan los mensajes?</h3>
                <p className="text-gray-400 mt-1">
                  Cada interacción entre tu bot y un usuario cuenta como un mensaje. Los mensajes se reinician al principio de cada ciclo mensual.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">¿Ofrecen ayuda para integraciónes a otros sistemas como CRM o ERP?</h3>
                <p className="text-gray-400 mt-1">
                  ¡Por supuesto! Contamos con un equipo de desarrollo que puede ayudarte a integrar tu bot con otros sistemas.
                </p>
                <br />
                <p className="text-gray-400 mt-1">
                  Si tienes una integración específica en mente, puedes escribir a nuestros socios de <a href="https://charro.ai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Charro.ai</a> para que te ayuden a integrar tu bot con otros sistemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
