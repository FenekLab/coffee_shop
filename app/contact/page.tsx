import Footer from 'components/layout/footer';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact | Le Bon Café Corse',
  description: 'Contactez-nous pour toute question sur nos cafés et thés d\'exception.'
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Notre atelier de torréfaction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Contactez-nous
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Notre équipe est à votre écoute pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <div>
                <span className="text-[#006B3F] font-medium text-base mb-3 inline-block tracking-widest uppercase">
                  Nos Coordonnées
                </span>
                <h2 className="text-4xl font-serif font-bold mb-8 tracking-tight text-[#2C2C2C]">
                  Venez nous rencontrer
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006B3F]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#006B3F]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">Notre Adresse</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Pl. Marcel Delaunay<br />
                        20220 L'Île-Rousse<br />
                        France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006B3F]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#006B3F]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">Téléphone</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <a href="tel:+33495600240" className="hover:text-[#006B3F] transition-colors">
                          04 95 60 02 40
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006B3F]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#006B3F]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">Email</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <a href="mailto:contact@leboncafecorse.fr" className="hover:text-[#006B3F] transition-colors">
                          contact@leboncafecorse.fr
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4 text-[#2C2C2C]">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Lundi - Samedi :</p>
                    <p className="ml-4">9h00 - 12h30</p>
                    <p className="ml-4">15h00 - 19h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#006B3F]/10">
                  <h3 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-6">
                    Envoyez-nous un message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg border border-[#006B3F]/20 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:border-transparent"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                          Prénom
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg border border-[#006B3F]/20 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:border-transparent"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-[#006B3F]/20 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-[#006B3F]/20 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:border-transparent"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-[#006B3F]/20 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:border-transparent"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#006B3F] text-white py-3 rounded-lg font-medium hover:bg-[#005432] transition-colors"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 