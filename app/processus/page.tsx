import Footer from 'components/layout/footer';
import { Bean, Coffee, Leaf, Scale, Truck } from 'lucide-react';

export const metadata = {
  title: 'Notre Processus | Le Bon Café Corse',
  description: 'Découvrez notre processus de torréfaction artisanale et notre engagement pour la qualité.'
};

export default function Processus() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/processus-hero.jpg" 
            alt="Processus de torréfaction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Notre Processus
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Un savoir-faire artisanal transmis de génération en génération depuis 1932.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#006B3F] font-medium text-base mb-3 inline-block tracking-widest uppercase">
              Notre Expertise
            </span>
            <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
              L'Art de la Torréfaction
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              La torréfaction est un art délicat qui demande patience, expertise et passion. 
              Chaque grain est soigneusement sélectionné et torréfié selon des méthodes traditionnelles 
              pour révéler ses arômes les plus subtils.
            </p>
          </div>
        </div>
      </section>

      {/* Étapes du processus */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-24">
              {/* Sélection */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-[#006B3F] flex items-center justify-center mb-6">
                    <Bean className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                    Sélection des Grains
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Nous sélectionnons minutieusement les meilleurs grains de café vert auprès de 
                    producteurs respectueux de l'environnement. Chaque origine est choisie pour 
                    ses caractéristiques uniques et sa qualité exceptionnelle.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Grains 100% Arabica de haute altitude
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Origines soigneusement sélectionnées
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Contrôle qualité rigoureux
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="/images/selection-grains.jpg" 
                    alt="Sélection des grains de café" 
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Torréfaction */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/images/torrefaction.jpg" 
                    alt="Processus de torréfaction" 
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-16 h-16 rounded-xl bg-[#006B3F] flex items-center justify-center mb-6">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                    Torréfaction Artisanale
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Notre maître torréfacteur surveille chaque lot avec attention, ajustant 
                    la température et le temps de torréfaction pour obtenir le profil aromatique 
                    parfait. Un savoir-faire transmis depuis trois générations.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Torréfaction traditionnelle
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Petits lots pour plus de précision
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Développement optimal des arômes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contrôle Qualité */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-[#006B3F] flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                    Contrôle Qualité
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Chaque lot est rigoureusement contrôlé avant d'être conditionné. 
                    Nous effectuons des tests gustatifs et vérifions la qualité de la 
                    torréfaction pour garantir l'excellence de nos cafés.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Tests gustatifs systématiques
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Contrôle de la torréfaction
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Traçabilité complète
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="/images/controle-qualite.jpg" 
                    alt="Contrôle qualité" 
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Conditionnement et Livraison */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/images/conditionnement.jpg" 
                    alt="Conditionnement des cafés" 
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-16 h-16 rounded-xl bg-[#006B3F] flex items-center justify-center mb-6">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                    Conditionnement et Livraison
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Nos cafés sont conditionnés dans des emballages hermétiques avec valve 
                    unidirectionnelle pour préserver leur fraîcheur. Nous assurons une 
                    livraison rapide pour vous garantir un café toujours frais.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Emballage hermétique
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Livraison rapide
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#006B3F] rounded-full mr-3"></span>
                      Fraîcheur garantie
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Qualité */}
      <section className="py-24 bg-[#006B3F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">
              Notre Engagement Qualité
            </h2>
            <p className="text-xl opacity-90 leading-relaxed mb-12">
              Chaque tasse de café reflète notre engagement pour l'excellence et 
              notre passion pour l'art de la torréfaction artisanale.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bean className="w-8 h-8" />,
                  title: "Sélection Premium",
                  description: "Les meilleurs grains soigneusement sélectionnés"
                },
                {
                  icon: <Coffee className="w-8 h-8" />,
                  title: "Savoir-faire",
                  description: "Une expertise transmise depuis 1932"
                },
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: "Développement Durable",
                  description: "Un engagement pour l'environnement"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 