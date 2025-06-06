
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface WebinarLayoutProps {
  children: ReactNode;
}

export const WebinarLayout: React.FC<WebinarLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bot-darkBg flex flex-col">
      <header className="bg-bot-darkBg border-b border-gray-800 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">WB</span>
              </div>
              <span className="font-bold text-xl text-white">WhatsBot AI</span>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-muted/30 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              {children}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-bot-darkBg border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} WhatsBot AI. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};
