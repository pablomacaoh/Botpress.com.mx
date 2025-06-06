
import React from "react";
import { WebinarLayout } from "@/components/webinar/WebinarLayout";
import { WebinarHeader } from "@/components/webinar/WebinarHeader";
import { WebinarRegistrationForm } from "@/components/webinar/WebinarRegistrationForm";
import { WebinarLearningPoints } from "@/components/webinar/WebinarLearningPoints";

const WEBINAR_DETAILS = {
  title: "Bots de WhatsApp impulsados por IA: El Futuro del Compromiso con el Cliente",
  date: "25 de Mayo, 2025",
  time: "14:00 EST",
  duration: "60 minutos"
};

const LEARNING_POINTS = [
  "Cómo la IA está transformando la comunicación empresarial en WhatsApp",
  "Estrategias para automatizar el servicio al cliente sin perder el toque personal",
  "Casos de estudio de implementaciones exitosas de bots de WhatsApp",
  "Pasos prácticos para configurar tu primer bot de WhatsApp impulsado por IA",
  "Preguntas y respuestas con nuestros expertos en IA e integración de WhatsApp"
];

const WebinarRegistration = () => {
  return (
    <WebinarLayout>
      <WebinarHeader
        title={WEBINAR_DETAILS.title}
        date={WEBINAR_DETAILS.date}
        time={WEBINAR_DETAILS.time}
        duration={WEBINAR_DETAILS.duration}
      />
      
      <div>
        <WebinarRegistrationForm
          webinarTitle={WEBINAR_DETAILS.title}
          webinarDate={WEBINAR_DETAILS.date}
          webinarTime={WEBINAR_DETAILS.time}
        />
        
        <WebinarLearningPoints points={LEARNING_POINTS} />
      </div>
    </WebinarLayout>
  );
};

export default WebinarRegistration;
