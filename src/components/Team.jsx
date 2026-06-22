import React from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Alexandru Popescu',
    role: 'Avocat Principal - Drept Corporativ',
    image: 'https://loremflickr.com/400/500/lawyer,man?lock=9',
    email: 'alexandru.popescu@juridic.ro',
    phone: '+40 721 123 456',
    description: 'Peste 20 de ani de experiență în drept corporativ și fuziuni internaționale.',
  },
  {
    name: 'Maria Ionescu',
    role: 'Avocat Senior - Drept Civil',
    image: 'https://loremflickr.com/400/500/lawyer,woman?lock=10',
    email: 'maria.ionescu@juridic.ro',
    phone: '+40 721 123 457',
    description: 'Specialistă în litigii civile și dreptul familiei cu o rată de succes de 95%.',
  },
  {
    name: 'Andrei Dumitrescu',
    role: 'Consilier Juridic - Drept Comercial',
    image: 'https://loremflickr.com/400/500/lawyer,man2?lock=11',
    email: 'andrei.dumitrescu@juridic.ro',
    phone: '+40 721 123 458',
    description: 'Expert în contracte comerciale și protecția proprietății intelectuale.',
  },
  {
    name: 'Elena Radu',
    role: 'Avocat - Dreptul Muncii',
    image: 'https://loremflickr.com/400/500/lawyer,woman2?lock=12',
    email: 'elena.radu@juridic.ro',
    phone: '+40 721 123 459',
    description: 'Pasionată de drepturile angajaților și relațiile de muncă echitabile.',
  },
];

function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-sm font-medium text-primary-700">Echipa Noastră</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
            Profesioniști Dedicati
            <span className="gradient-text block">Succesului Tău</span>
          </h2>
          <p className="text-lg text-dark-600 leading-relaxed">
            Fiecare membru al echipei noastre aduce expertiză de top și o pasiune 
            autentică pentru dreptate și excelență juridică.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href={`mailto:${member.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <HiMail />
                  </a>
                  <a href={`tel:${member.phone}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <HiPhone />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-dark-800 mb-1">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-dark-500 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
