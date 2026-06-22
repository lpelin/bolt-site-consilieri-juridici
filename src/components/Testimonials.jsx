import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Cristian Marinescu',
    role: 'CEO, TechCorp SRL',
    image: 'https://loremflickr.com/200/200/business,man?lock=13',
    content: 'Profesionalism desăvârșit! Echipa de consilieri juridici ne-a ajutat să navigăm cu succes printr-o fuziune complexă. Recomand cu toată încrederea.',
    rating: 5,
  },
  {
    name: 'Ana Popa',
    role: 'Antreprenor',
    image: 'https://loremflickr.com/200/200/business,woman?lock=14',
    content: 'Am apelat la ei pentru un litigiu civil și rezultatul a depășit așteptările. Comunicare excelentă și soluții inovatoare.',
    rating: 5,
  },
  {
    name: 'Mihai Constantinescu',
    role: 'Director Financiar',
    image: 'https://loremflickr.com/200/200/manager,man?lock=15',
    content: 'Colaborăm de peste 5 ani cu această firmă de consiliere juridică. Au demonstrat constant că sunt cei mai buni în domeniul dreptului corporativ.',
    rating: 5,
  },
  {
    name: 'Ioana Dumitru',
    role: 'Avocat Partener',
    image: 'https://loremflickr.com/200/200/lawyer,woman3?lock=16',
    content: 'Un partener de încredere pentru consultanță juridică de specialitate. Abordarea lor pragmatică și cunoștințele profunde fac diferența.',
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-sm font-medium text-primary-700">Testimoniale</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
            Ce Spun Clienții
            <span className="gradient-text block">Despre Noi</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {/* Quote mark */}
            <div className="absolute top-8 right-8 text-primary-100 select-none">
              <span className="text-8xl font-serif leading-none">"</span>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-100"
                />
                <div>
                  <h3 className="text-lg font-semibold text-dark-800">{testimonials[current].name}</h3>
                  <p className="text-sm text-dark-500">{testimonials[current].role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-dark-700 leading-relaxed italic mb-8">
                "{testimonials[current].content}"
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === current ? 'bg-primary-600 w-8' : 'bg-dark-300 hover:bg-dark-400'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                  >
                    <span className="text-xl font-bold">‹</span>
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                  >
                    <span className="text-xl font-bold">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
