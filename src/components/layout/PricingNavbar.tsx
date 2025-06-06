
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PricingNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/#contact');
    };

    return (
        <nav className="sticky top-0 z-50 w-full glass-effect py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">BP</span>
                    </div>
                    <span className="font-bold text-xl text-white">Botpress México</span>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/#contact" className="text-white hover:text-gray-300 transition-colors">
                        Contacto
                    </Link>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-bot-darkBg border-t border-gray-800 md:hidden">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link to="/#contact" className="text-white hover:text-gray-300 transition-colors" onClick={toggleMenu}>
                                Contacto
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default PricingNavbar;
