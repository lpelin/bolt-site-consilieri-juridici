import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { GiJusticeStar } from 'react-icons/gi';

const navLinks = [
  { name: 'Acasă', to: 'hero' },
  { name: 'Despre Noi', to: 'about' },
  { name: 'Servicii', to: 'services' },
  { name: 'Echipa', to: 'team' },
  { name: 'Testimoniale', to: 'testimonials' },
  { name: 'Contact', to: 'contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <GiJusticeStar className="text-white text-2xl" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-dark-800 font-serif">
                Consilieri Juridici
              </h1>
              <p className="text-xs text-dark-500 -mt-1">Excelență în Drept</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-primary-600 bg-primary-50"
                className="px-4 py-2 text-sm font-medium text-dark-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="ml-4 btn-primary text-sm px-6 py-3"
            >
              Consultație Gratuită
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-dark-50 transition-colors"
            aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
          >
            {isOpen ? (
              <HiX className="text-2xl text-dark-800" />
            ) : (
              <HiMenu className="text-2xl text-dark-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-dark-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="block mx-4 mt-4 btn-primary text-sm px-6 py-3 text-center"
            >
              Consultație Gratuită
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
