import { Coffee, Settings, Store } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Professionnelles | Le Bon Café',
  description: 'Découvrez nos solutions de machines à café pour les professionnels.',
};

export default function ProfessionnelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Solutions Professionnelles</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Des solutions sur mesure pour les cafés, hôtels et restaurants.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* Introduction */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Store className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                Notre Accompagnement
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200 pb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Nous accompagnons les cafés, hôtels, restaurants et autres établissements professionnels avec des solutions personnalisées en machines à café.
                </p>
              </div>
            </div>
          </div>

          {/* Machines */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                Nos Machines
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200 pb-16">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group/card">
                  <h3 className="font-bold text-xl text-amber-900 mb-4 group-hover/card:translate-x-2 transition-transform duration-300">
                    Machines à Groupe Traditionnelles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avec moulins professionnels, pour les puristes du café.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group/card">
                  <h3 className="font-bold text-xl text-amber-900 mb-4 group-hover/card:translate-x-2 transition-transform duration-300">
                    Machines Compatibles Capsules
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nespresso® ou FAP, pour plus de simplicité et de rapidité.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group/card">
                  <h3 className="font-bold text-xl text-amber-900 mb-4 group-hover/card:translate-x-2 transition-transform duration-300">
                    Melitta Café Solo
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Machines automatiques idéales pour les événements ou les petits volumes.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group/card">
                  <h3 className="font-bold text-xl text-amber-900 mb-4 group-hover/card:translate-x-2 transition-transform duration-300">
                    Machines CREA
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parfaitement adaptées aux hôtels et aux débits importants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                Nos Services
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Nous vous conseillons dans le choix, l'installation, l'entretien et bien sûr, nous fournissons le café adapté à vos attentes.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-8 shadow-md">
                  <p className="text-xl font-medium text-white text-center">
                    Un café d'exception commence par une bonne machine – et un bon partenaire. Nous sommes là pour ça.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 