import React from 'react';
import { HiShieldCheck, HiScale, HiAcademicCap, HiHeart } from 'react-icons/hi';

const values = [
  {
    icon: HiShieldCheck,
    title: 'Integritate',
    description: 'Acționăm cu onestitate și transparență în fiecare caz, respectând cele mai înalte standarde etice.',
  },
  {
    icon: HiScale,
    title: 'Justiție',
    description: 'Luptăm pentru dreptate și echitate, asigurându-ne că vocea fiecărui client este auzită.',
  },
  {
    icon: HiAcademicCap,
    title: 'Expertiză',
    description: 'Peste 15 ani de experiență și actualizare continuă în domeniul juridic pentru soluții optime.',
  },
  {
    icon: HiHeart,
    title: 'Dedicare',
    description: 'Ne implicăm personal în fiecare caz, oferind suport emoțional și juridic complet.',
  },
];

function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-dark-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 gradient-bg rounded-2xl opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400 rounded-2xl opacity-20" />
              <img
                src="https://loremflickr.com/800/600/law,office?lock=2"
                alt="Cabinet juridic"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                    <HiScale className="text-white text-2xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-800 font-serif">15+</div>
                    <div className="text-sm text-dark-500">Ani de Experiență</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-sm font-medium text-primary-700">Despre Noi</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
              Partenerul Tău de Încredere în
              <span className="gradient-text block">Lumea Juridică</span>
            </h2>

            <p className="text-lg text-dark-600 leading-relaxed mb-8">
              Fondată în 2010, firma noastră de consiliere juridică a devenit un reper 
              de încredere în peisajul legal românesc. Combinăm expertiza tradițională 
              cu abordări inovatoare pentru a oferi soluții personalizate fiecărui client.
            </p>

            <p className="text-lg text-dark-500 leading-relaxed mb-10">
              Credem că fiecare caz merită o atenție specială și o strategie unică. 
              Echipa noastră de avocați și consilieri juridici lucrează împreună pentru 
              a transforma provocările legale în oportunități de succes.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-800 mb-1">{value.title}</h3>
                    <p className="text-sm text-dark-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
