import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const mailtoLink = `mailto:laurpelin91@gmail.com?subject=${encodeURIComponent(formData.subject || 'Solicitare Consultanță Juridică')}&body=${encodeURIComponent(
      `Nume: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\nMesaj:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary-400" />
              <span className="text-sm font-medium text-primary-300">Contactează-ne</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Suntem Aici pentru
              <span className="gradient-text block">Tine</span>
            </h2>

            <p className="text-lg text-dark-400 leading-relaxed mb-10">
              Programează o consultație gratuită și descoperă cum te putem ajuta 
              să îți rezolvi problemele legale cu încredere și profesionalism.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiPhone className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefon</h3>
                  <a href="tel:+40721123456" className="text-dark-400 hover:text-primary-400 transition-colors">
                    +40 721 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiMail className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:laurpelin91@gmail.com" className="text-dark-400 hover:text-primary-400 transition-colors">
                    laurpelin91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Adresă</h3>
                  <p className="text-dark-400">Bulevardul Unirii 25, București</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiClock className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Program</h3>
                  <p className="text-dark-400">Luni - Vineri: 09:00 - 18:00</p>
                  <p className="text-dark-400">Sâmbătă: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <div className="bg-dark-800 rounded-3xl p-8 md:p-10 border border-dark-700/50">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HiPaperAirplane className="text-green-400 text-3xl -rotate-45" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    Mesaj Trimis cu Succes!
                  </h3>
                  <p className="text-dark-400 mb-6">
                    Vom reveni cu un răspuns în cel mai scurt timp posibil.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Trimite un Nou Mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Nume Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+40 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Subiect
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Subiectul mesajului"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Mesajul Tău *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descrie pe scurt situația ta juridică..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full justify-center text-lg py-4"
                  >
                    <HiPaperAirplane className="-rotate-45" />
                    Trimite Mesajul
                  </button>

                  <p className="text-xs text-dark-500 text-center">
                    * Câmpurile marcate sunt obligatorii. Datele tale sunt în siguranță.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
