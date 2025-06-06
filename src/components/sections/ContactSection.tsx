import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const watchedValues = watch();

  // Debug logging to check environment variables
  console.log("🔥 Firebase config check:", {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? "✓ Present" : "✗ Missing",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? "✓ Present" : "✗ Missing",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? "✓ Present" : "✗ Missing",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? "✓ Present" : "✗ Missing",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? "✓ Present" : "✗ Missing",
    appId: import.meta.env.VITE_FIREBASE_APP_ID ? "✓ Present" : "✗ Missing"
  });

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("📝 Form submission started:", data);
    setFormStatus('submitting');

    try {
      console.log("🔄 Attempting to save to Firebase...");
      await addDoc(collection(db, "submissions"), {
        ...data,
        submittedAt: serverTimestamp(),
      });
      console.log("✅ Successfully saved to Firebase!");
      setFormStatus('success');
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo lo antes posible.",
      });
      reset();
    } catch (error) {
      console.error("❌ Detailed Firebase error:", error);
      setFormStatus('error');
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setValue('interest', value);
  };

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading">Ponte en Contacto</h2>
              <p className="text-lg text-gray-600 mb-8">
                ¿Tienes preguntas sobre nuestra plataforma de bots de IA para WhatsApp? Completa el formulario y nuestro equipo se pondrá en contacto contigo en breve.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bot-purple/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bot-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Teléfono</h3>
                    <p className="text-gray-600">+52 56 5137 1467</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    placeholder="Juan Pérez"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    placeholder="Tu Empresa"
                    {...register("company")}
                  />
                </div>

                <div>
                  <Label htmlFor="interest">¿En qué estás interesado?</Label>
                  <Select value={watchedValues.interest || ""} onValueChange={handleSelectChange}>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-demo">Demo del Producto</SelectItem>
                      <SelectItem value="pricing">Información de Precios</SelectItem>
                      <SelectItem value="technical">Soporte Técnico</SelectItem>
                      <SelectItem value="partnership">Oportunidad de Asociación</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    rows={4}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-gradient hover:opacity-90"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
