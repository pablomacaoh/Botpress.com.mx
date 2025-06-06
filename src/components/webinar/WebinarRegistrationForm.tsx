
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { sendConfirmationEmail } from "@/services/emailService";
import { webinarRegistrationSchema, WebinarFormData } from "@/schemas/webinarRegistrationSchema";

interface WebinarRegistrationFormProps {
  webinarTitle: string;
  webinarDate: string;
  webinarTime: string;
}

export const WebinarRegistrationForm: React.FC<WebinarRegistrationFormProps> = ({
  webinarTitle,
  webinarDate,
  webinarTime
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize react-hook-form with zod resolver
  const form = useForm<WebinarFormData>({
    resolver: zodResolver(webinarRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      agreedToTerms: false,
    },
  });

  const handleSubmit = async (data: WebinarFormData) => {
    setIsSubmitting(true);

    try {
      // Send confirmation email
      const emailSent = await sendConfirmationEmail({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        webinarDate,
        webinarTime,
        webinarTitle
      });

      if (emailSent) {
        toast({
          title: "¡Registro exitoso!",
          description: "Te has registrado para el webinar. Revisa tu correo electrónico para más detalles.",
        });
        
        // Reset the form
        form.reset();
      } else {
        toast({
          title: "Error al enviar el correo electrónico",
          description: "Se completó tu registro pero no pudimos enviar el correo de confirmación. Por favor, contáctanos.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Regístrate Ahora</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-muted/40 border-gray-700 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Apellido</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-muted/40 border-gray-700 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Correo Electrónico</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-muted/40 border-gray-700 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Empresa</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-muted/40 border-gray-700 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Cargo</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-muted/40 border-gray-700 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreedToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-gray-600 data-[state=checked]:bg-blue-500"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-gray-400 leading-tight">
                    Acepto recibir comunicaciones de WhatsBot AI. Lee nuestra{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Política de Privacidad
                    </a>
                    .
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registrando..." : "Registrarse para el Webinar"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
