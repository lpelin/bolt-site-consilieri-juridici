import React from 'react';
import { Link } from 'react-scroll';
import { GiJusticeStar } from 'react-icons/gi';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <GiJusticeStar className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Consilieri Juridici</h3>
                <p className="text-xs text-dark-400">Excelență în Drept</p>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Oferim consultanță juridică de top pentru persoane fizice și companii, 
              cu integritate și profesionalism.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {[
                { name: 'Acasă', to: 'hero' },
                { name: 'Despre Noi', to: 'about' },
                { name: 'Servicii', to: 'services' },
                { name: 'Echipa', to: 'team' },
                { name: 'Testimoniale', to: 'testimonials' },
                { name: 'Contact', to: 'contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servicii</h4>
            <ul className="space-y-3">
              {[
                'Drept Civil',
                'Drept Corporativ',
                'Dreptul Muncii',
                'Drept Comercial',
                'Drept Imobiliar',
                'Drept Penal',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-dark-400 text-sm">Bulevardul Unirii 25, București</span>
              </li>
              <li>
                <a href="tel:+40721123456" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors text-sm">
                  <HiPhone className="text-primary-400 flex-shrink-0" />
                  +40 721 123 456
                </a>
              </li>
              <li>
                <a href="mailto:laurpelin91@gmail.com" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors text-sm">
                  <HiMail className="text-primary-400 flex-shrink-0" />
                  laurpelin91@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © {currentYear} Consilieri Juridici. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-dark-500 hover:text-primary-400 transition-colors text-sm">
              Termeni și Condiții
            </a>
            <a href="#" className="text-dark-500 hover:text-primary-400 transition-colors text-sm">
              Politica de Confidențialitate
            </a>
            <a href="#" className="text-dark-500 hover:text-primary-400 transition-colors text-sm">
              Cookie-uri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
