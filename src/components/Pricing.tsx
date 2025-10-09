import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plan Básico",
    monthlyPrice: "2,000",
    yearlyPrice: "22,000",
    yearlyDiscount: "2,000",
    description: "Perfecto para pequeños negocios que están comenzando",
    popular: false,
    features: [
      "24/7 365 Disponibilidad",
      "5 USD de crédito en llamadas a IA",
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
  },
  {
    name: "Plan Profesional",
    monthlyPrice: "5,000",
    yearlyPrice: "56,000",
    yearlyDiscount: "4,000",
    description: "Para negocios en crecimiento con necesidades específicas",
    popular: true,
    features: [
      "Todo en Plan Básico",
      "Integración con CRM",
      "2 Bots incluidos",
      "2 colaboradores incluidos",
      "100,000 renglones de tabla incluidos",
      "1GB de almacenamiento en BD Vectorizada",
      "10GB de almacenamiento de archivos",
      "Remover la leyenda \"powered by Botpress\"",
      "Mayores límites de uso",
      "Saludos personalizados",
      "Soporte multi-idioma",
      "Etiqueta blanca",
      "10,000 visitantes/mes",
    ],
  },
  {
    name: "Plan Empresarial",
    monthlyPrice: "Contactar",
    yearlyPrice: "Contactar",
    description: "Solución completa para empresas con alto volumen",
    popular: false,
    features: [
      "Todo en Plan Profesional",
      "Personalización de onboarding",
      "Respuestas personalizadas",
      "Integraciones personalizadas",
      "Desarrollo a la medida",
      "CSM dedicado",
      "Desarrollo AI avanzado con RAG y bases vectorizadas",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Precios de acceso a la plataforma de Botpress
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Elige el plan que mejor se adapte a las necesidades de tu negocio, con escalabilidad 
            para crecer conforme lo hace tu empresa.
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-2">
            Todas las licencias de <a href="https://try.botpress.com/52jx5qj6w6kh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Botpress</a> pueden ser adquiridas directamente en Botpress.com, 
            al hacerlo a través de BPMx ofrecemos servicio de onboarding y soporte.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-card transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Más Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-6">
                  {plan.monthlyPrice !== "Contactar" ? (
                    <>
                      <div className="text-4xl font-bold">
                        MXN {plan.monthlyPrice}
                        <span className="text-lg font-normal text-muted-foreground">/mes</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        o MXN {plan.yearlyPrice}/año
                        <span className="text-primary font-medium ml-1">
                          (ahorra MXN {plan.yearlyDiscount})
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-primary">Contactar</div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                <a href="#contacto" className="w-full">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.monthlyPrice === "Contactar" ? "Contáctanos" : "Comenzar Ahora"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <a href="https://wa.me/525543419875" target="_blank" rel="noopener noreferrer" className="block hover:no-underline">
              <Card className="hover:bg-muted/80 transition-colors">
                <CardContent className="pt-6 flex items-center justify-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="hsl(270 70% 50%)" className="bi bi-whatsapp shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  <p className="text-sm text-muted-foreground font-medium">
                    Si tienes dudas sobre los costos y lo que incluye no dudes en escribirnos por WhatsApp, mail o en la forma de contacto de esta página.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
