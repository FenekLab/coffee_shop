import Footer from 'components/layout/footer';
import { Award, Clock, Coffee, Users } from 'lucide-react';

export const metadata = {
  title: 'Notre Histoire | Le Bon Café Corse',
  description: 'Découvrez l\'histoire de notre torréfaction artisanale corse, un savoir-faire familial transmis depuis 1932.'
};

export default function NotrHistoire() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/histoire-hero.jpg" 
            alt="Ancien atelier de torréfaction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Notre Histoire
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Une passion familiale pour le café, transmise de génération en génération depuis 1932.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#006B3F] font-medium text-base mb-3 inline-block tracking-widest uppercase">
                  Nos Origines
                </span>
                <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                  Une Histoire de Famille
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  C'est en 1932 que notre histoire commence, lorsque notre grand-père a ouvert 
                  sa première boutique de torréfaction au cœur de la Corse. Depuis, notre passion 
                  pour le café n'a cessé de grandir, tout comme notre expertise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chaque génération a apporté sa pierre à l'édifice, perfectionnant nos méthodes 
                  de torréfaction tout en restant fidèle à nos valeurs d'authenticité et de qualité.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/histoire-1.jpg" 
                  alt="Photo historique de la torréfaction" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#006B3F] p-4 rounded-xl shadow-xl">
                  <Clock className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">
              {[
                {
                  icon: <Coffee className="w-8 h-8" />,
                  title: "Savoir-faire Artisanal",
                  description: "Une torréfaction traditionnelle qui révèle les meilleurs arômes"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Excellence",
                  description: "Une quête permanente de la qualité et du goût parfait"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Tradition Familiale",
                  description: "Un héritage transmis avec passion depuis trois générations"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="p-8 bg-white rounded-xl border-2 border-[#006B3F]/10 hover:border-[#006B3F] transition-colors"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#006B3F]/10 flex items-center justify-center mb-6 text-[#006B3F]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#2C2C2C]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* 1932 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <span className="text-[#006B3F] font-serif text-4xl mb-4 inline-block">1932</span>
                <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                  Les Débuts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Notre grand-père ouvre sa première boutique de torréfaction au cœur de la Corse. 
                  Équipé d'un petit torréfacteur traditionnel, il commence à développer ses premiers 
                  mélanges, cherchant inlassablement le parfait équilibre des arômes.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/images/histoire-2.jpg" 
                  alt="Première boutique en 1932" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* 1960 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/images/histoire-3.jpg" 
                  alt="Développement dans les années 60" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <span className="text-[#006B3F] font-serif text-4xl mb-4 inline-block">1960</span>
                <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                  L'Expansion
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  La deuxième génération prend les rênes et modernise l'entreprise. 
                  Nous investissons dans de nouveaux équipements tout en préservant 
                  nos méthodes traditionnelles de torréfaction.
                </p>
              </div>
            </div>

            {/* Aujourd'hui */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <span className="text-[#006B3F] font-serif text-4xl mb-4 inline-block">Aujourd'hui</span>
                <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                  L'Innovation dans la Tradition
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  La troisième génération poursuit l'aventure, alliant tradition et modernité. 
                  Nous continuons d'innover tout en restant fidèles à nos valeurs : 
                  la qualité, l'authenticité et le respect du produit.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/images/histoire-4.jpg" 
                  alt="Notre atelier aujourd'hui" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 