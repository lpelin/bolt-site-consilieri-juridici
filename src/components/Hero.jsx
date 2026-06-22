import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowRight, HiShieldCheck } from 'react-icons/hi';
import { GiJusticeStar, GiScaleMail } from 'react-icons/gi';

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://loremflickr.com/1920/1080/law,justice?lock=1"
          alt="Justiție"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8 animate-fade-in">
            <GiJusticeStar className="text-gold-400 text-lg" />
            <span className="text-sm text-white/80 font-medium">
              Excelență Juridică din 2010
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-slide-up">
            Protejăm Drepturile
            <span className="block gradient-text">Construim Viitorul</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Oferim consultanță juridică de elită pentru persoane fizice și companii. 
            Cu o experiență de peste 15 ani, transformăm provocările legale în soluții sigure și eficiente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-gold text-lg px-10 py-5"
            >
              Programează o Consultație
              <HiArrowRight className="text-xl" />
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-10 py-5"
            >
              Serviciile Noastre
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { number: '500+', label: 'Cazuri Rezolvate' },
              { number: '98%', label: 'Rata de Succes' },
              { number: '15+', label: 'Ani de Experiență' },
              { number: '50+', label: 'Specialiști' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white font-serif mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
