import { Coffee, Settings, Truck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Processus | Le Bon Café',
  description: 'Découvrez notre processus de torréfaction artisanale.',
};

export default function ProcessusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Notre Processus</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Un savoir-faire artisanal qui révèle toute la richesse de nos cafés.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* Sélection */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                La Sélection des Grains
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200 pb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Chez Le Bon Café, chaque grain est sélectionné avec soin, issu de négociations directes avec des producteurs en Amérique centrale, Amérique du Sud, Afrique et Asie. On privilégie les circuits courts, les relations de confiance, et surtout : la qualité.
                </p>
              </div>
            </div>
          </div>

          {/* Torréfaction */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                Notre Torréfaction
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200 pb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Notre torréfaction est artisanale et lente, en petite quantité, pour respecter le grain et en révéler toute la richesse aromatique. Ici, rien n'est automatisé : chaque torréfaction est maîtrisée à la seconde près, en fonction de l'origine et du profil du café.
                  </p>
                  <p>
                    Une fois torréfié, notre café est disponible sous 24 à 48 heures, pour garantir une fraîcheur optimale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Livraison */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                Livraison
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="w-3 h-3 mt-2 bg-amber-900 rounded-full"></span>
                      <span className="text-gray-600 text-lg">En Corse : la livraison se fait en direct, dans la journée ou sous 24h maximum.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-3 h-3 mt-2 bg-amber-900 rounded-full"></span>
                      <span className="text-gray-600 text-lg">Sur le continent : nous expédions en Mondial Relay (ou autre selon préférence), sous 3 à 4 jours ouvrés.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-8 shadow-md">
                  <p className="text-xl font-medium text-white italic text-center">
                    Du grain vert à la tasse, notre obsession reste la même : la fraîcheur, le goût, l'authenticité.
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