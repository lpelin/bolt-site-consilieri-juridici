import React from 'react';
import { 
  HiScale, HiOfficeBuilding, HiUserGroup, HiBriefcase, 
  HiHome, HiShieldCheck, HiArrowRight 
} from 'react-icons/hi';
import { Link } from 'react-scroll';

const services = [
  {
    icon: HiScale,
    title: 'Drept Civil',
    description: 'Soluții complete pentru litigii civile, contracte, proprietate și succesiuni.',
    image: 'https://loremflickr.com/600/400/law,civil?lock=3',
  },
  {
    icon: HiOfficeBuilding,
    title: 'Drept Corporativ',
    description: 'Consultanță pentru companii, fuziuni, achiziții și guvernanță corporativă.',
    image: 'https://loremflickr.com/600/400/corporate,law?lock=4',
  },
  {
    icon: HiUserGroup,
    title: 'Dreptul Muncii',
    description: 'Asistență în relații de muncă, contracte colective și litigii angajator-angajat.',
    image: 'https://loremflickr.com/600/400/labor,law?lock=5',
  },
  {
    icon: HiBriefcase,
    title: 'Drept Comercial',
    description: 'Soluții pentru afaceri, contracte comerciale și protecția investițiilor.',
    image: 'https://loremflickr.com/600/400/business,law?lock=6',
  },
  {
    icon: HiHome,
    title: 'Drept Imobiliar',
    description: 'Consultanță pentru tranzacții imobiliare, construcții și proprietate.',
    image: 'https://loremflickr.com/600/400/realestate,law?lock=7',
  },
  {
    icon: HiShieldCheck,
    title: 'Drept Penal',
    description: 'Apărare penală de înaltă calitate pentru persoane fizice și juridice.',
    image: 'https://loremflickr.com/600/400/criminal,law?lock=8',
  },
];

function Services() {
  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-primary-400" />
            <span className="text-sm font-medium text-primary-300">Serviciile Noastre</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Soluții Juridice Complete
            <span className="gradient-text block">pentru Orice Provocare</span>
          </h2>
          <p className="text-lg text-dark-400 leading-relaxed">
            Oferim o gamă largă de servicii juridice, adaptate nevoilor specifice 
            ale fiecărui client, de la persoane fizice la mari corporații.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-dark-800 rounded-2xl overflow-hidden hover-lift border border-dark-700/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-primary-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-dark-400 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors group/link"
                >
                  Află mai multe
                  <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn-gold text-lg px-12 py-5"
          >
            Solicită o Ofertă Personalizată
            <HiArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
