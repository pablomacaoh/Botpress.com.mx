import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-botpress.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[hsl(var(--navbar-bg))]/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Botpress MX Logo" className="h-10 w-auto" />
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
            <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
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
              <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
                Contacto
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
