
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bot-darkBg border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-lg">BP</span>
            </div>
            <span className="font-bold text-xl text-white">Botpress México</span>
          </Link>
          
          <p className="text-gray-400 mb-12">
            Bots de WhatsApp de última generación impulsados por inteligencia artificial.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Botpress México. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Términos</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
