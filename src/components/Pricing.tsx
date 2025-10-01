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
            Precios Transparentes y Flexibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Elige el plan que mejor se adapte a las necesidades de tu negocio, con escalabilidad 
            para crecer conforme lo hace tu empresa.
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-2">
            Todas las licencias de Botpress pueden ser adquiridas directamente en Botpress.com, 
            al hacerlo a través de BPMx ofrecemos servicio de onboarding y soporte.
          </p>
          <p className="text-sm font-medium text-muted-foreground">Todos los precios son en MXN.</p>
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
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.monthlyPrice === "Contactar" ? "Contáctanos" : "Comenzar Ahora"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">¿Puedo cambiar de plan en cualquier momento?</h4>
                <p className="text-sm text-muted-foreground">
                  Sí, puedes actualizar o reducir tu plan en cualquier momento. Los cambios se reflejarán 
                  en tu próximo ciclo de facturación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
