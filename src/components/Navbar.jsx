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
          ? 'bg-black/90 backdrop-blur-lg shadow-2xl shadow-black/20'
          : 'bg-white/10 backdrop-blur-sm'
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
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400'
            }`}>
              <GiJusticeStar className="text-white text-2xl" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold font-serif transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                Consilieri Juridici
              </h1>
              <p className={`text-xs -mt-1 transition-colors duration-300 ${
                scrolled ? 'text-gray-400' : 'text-white/70'
              }`}>
                Excelență în Drept
              </p>
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
                activeClass={scrolled ? 'bg-white/10 text-white' : 'bg-white/20 text-white'}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                  scrolled 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`ml-4 text-sm px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] ${
                scrolled
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Consultație Gratuită
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled 
                ? 'hover:bg-white/10' 
                : 'hover:bg-white/20'
            }`}
            aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
          >
            {isOpen ? (
              <HiX className={`text-2xl ${scrolled ? 'text-white' : 'text-white'}`} />
            ) : (
              <HiMenu className={`text-2xl ${scrolled ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 space-y-1 border-t ${
            scrolled ? 'border-white/10' : 'border-white/20'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                  scrolled 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className={`block mx-4 mt-4 text-sm px-6 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
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
