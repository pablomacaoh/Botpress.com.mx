
import { z } from "zod";
import { validateEmail } from "@/utils/emailValidation";

// Define form schema with Zod
export const webinarRegistrationSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido").refine(
    (email) => validateEmail(email).isValid,
    { message: "Por favor, ingresa un correo electrónico corporativo válido" }
  ),
  company: z.string().min(2, "El nombre de la empresa es requerido"),
  jobTitle: z.string().min(2, "El cargo es requerido"),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: "Debes aceptar los términos y condiciones"
  })
});

export type WebinarFormData = z.infer<typeof webinarRegistrationSchema>;
