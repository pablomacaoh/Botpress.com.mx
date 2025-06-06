
import { toast } from "@/components/ui/use-toast";

// Interface for the confirmation email data
export interface ConfirmationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  webinarDate: string;
  webinarTime: string;
  webinarTitle: string;
}

// Function to simulate sending a confirmation email
export const sendConfirmationEmail = async (data: ConfirmationEmailData): Promise<boolean> => {
  console.log("Sending confirmation email to:", data.email);
  
  // In a real implementation, this would make an API call to a backend service
  // This is a mock implementation that simulates the process
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Log what would be sent in a real email
      console.log("Email content:", {
        to: data.email,
        subject: `Confirmación de registro: ${data.webinarTitle}`,
        body: `
          Hola ${data.firstName} ${data.lastName},
          
          ¡Gracias por registrarte en nuestro webinar "${data.webinarTitle}"!
          
          Detalles del evento:
          - Fecha: ${data.webinarDate}
          - Hora: ${data.webinarTime}
          
          Te enviaremos un recordatorio 24 horas antes del evento.
          
          Si tienes alguna pregunta, puedes responder a este correo.
          
          Saludos,
          El equipo de WhatsBot AI
        `,
      });
      
      // Simulate successful email sending (you can change to false to test error handling)
      const success = true;
      
      if (success) {
        toast({
          title: "Email de confirmación enviado",
          description: `Se ha enviado un email de confirmación a ${data.email}`,
        });
      }
      
      resolve(success);
    }, 1000);
  });
};
