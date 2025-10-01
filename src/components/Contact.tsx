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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos dentro de 24 horas.",
      });
      reset();
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a
                      href="tel:+525512345678"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +52 55 1234 5678
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
              <Button variant="outline" size="lg" className="w-full group">
                <Calendar className="w-5 h-5 mr-2" />
                Reservar Consulta
              </Button>
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
