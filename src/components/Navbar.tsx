import { Button } from "@/components/ui/button";
import { Bot, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              WhatsBot AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Características
            </a>
            <a href="#offerings" className="text-sm font-medium hover:text-primary transition-colors">
              Qué Ofrecemos
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Precios
            </a>
            <a href="#learn" className="text-sm font-medium hover:text-primary transition-colors">
              Aprende
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button variant="default">Empezar Gratis</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Características
              </a>
              <a href="#offerings" className="text-sm font-medium hover:text-primary transition-colors">
                Qué Ofrecemos
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Precios
              </a>
              <a href="#learn" className="text-sm font-medium hover:text-primary transition-colors">
                Aprende
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="w-full">Iniciar Sesión</Button>
                <Button variant="default" className="w-full">Empezar Gratis</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
