import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100),
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  consultType: z.string().min(1, { message: "Selecciona un tipo de consulta" }),
  message: z.string().trim().min(1, { message: "El mensaje es requerido" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

declare const fbq: (type: string, event: string) => void;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formbold.com/s/3OWpR", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        fbq('track', 'Lead');
        toast({
          title: "¡Mensaje enviado!",
          description: "Te responderemos dentro de 24 horas.",
        });
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para transformar tu organización con IA? Hablemos sobre cómo nuestros 
            programas de entrenamiento pueden satisfacer tus necesidades y objetivos específicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-2">Envíanos un Mensaje</h3>
              <p className="text-muted-foreground mb-8">
                Completa el formulario a continuación y te responderemos dentro de 24 horas.
              </p>

              <form 
                method="POST"
                action="https://formbold.com/s/3OWpR" 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Nombre Completo <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Juan Pérez"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Correo Electrónico <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@empresa.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nombre de tu Empresa"
                      {...register("company")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de Teléfono</Label>
                    <Input
                      id="phone"
                      placeholder="+52 55 1234 5678"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consultType">
                    Tipo de Consulta <span className="text-destructive">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue("consultType", value)}>
                    <SelectTrigger className={errors.consultType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecciona un tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plataforma">Acceso a la Plataforma</SelectItem>
                      <SelectItem value="servicios">Servicios Profesionales</SelectItem>
                      <SelectItem value="soporte">Soporte Técnico</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.consultType && (
                    <p className="text-sm text-destructive">{errors.consultType.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Mensaje <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tus necesidades de entrenamiento en IA, tamaño del equipo, cronograma y cualquier requerimiento específico..."
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Correo</h4>
                    <a
                      href="mailto:contacto@botpress.com.mx"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contacto@botpress.com.mx
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <a href="https://wa.me/525543419875" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="hsl(270 70% 50%)" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp y Teléfono</h4>
                    <a
                      href="https://wa.me/525543419875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +52 55 4341 9875
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Ciudad de México, México
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-4">Programar una Reunión</h3>
              <p className="text-muted-foreground mb-6">
                Reserva una consulta de 30 minutos para discutir tus necesidades de entrenamiento en IA.
              </p>
              <a href="https://calendly.com/pablo-charro/15-minute-meeting" target="_blank" rel="noopener noreferrer" onClick={() => fbq('track', 'Schedule')}>
                <Button variant="outline" size="lg" className="w-full group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Consulta
                </Button>
              </a>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Se abrirá en una nueva pestaña
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
