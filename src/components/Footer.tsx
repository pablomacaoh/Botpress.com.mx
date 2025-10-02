import logo from "@/assets/logo-botpress.png";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Botpress MX Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              Democratizando la IA para empresas de todos los tamaños.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Características</a></li>
              <li><a href="#offerings" className="hover:text-primary transition-colors">Qué Ofrecemos</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Precios</a></li>
              <li><a href="#learn" className="hover:text-primary transition-colors">Aprende</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#learn" className="hover:text-primary transition-colors">Documentación</a></li>
              <li><a href="#learn" className="hover:text-primary transition-colors">Guías</a></li>
              <li><a href="#partner" className="hover:text-primary transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#partner" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 WhatsBot AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
