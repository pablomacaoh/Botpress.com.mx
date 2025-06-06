
import React from "react";

interface WebinarInfoProps {
  title: string;
  date: string;
  time: string;
  duration: string;
}

export const WebinarHeader: React.FC<WebinarInfoProps> = ({ title, date, time, duration }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-white/90 text-lg">
        Únete a nuestro webinar gratuito y aprende cómo revolucionar tu experiencia con el cliente
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Fecha</p>
            <p className="font-bold">{date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Hora</p>
            <p className="font-bold">{time}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Duración</p>
            <p className="font-bold">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
