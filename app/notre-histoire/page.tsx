import { Clock, Star, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Histoire | Le Bon Café',
  description: 'Découvrez l\'histoire de notre torréfaction artisanale depuis 1932.',
};

export default function NotrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Notre Histoire</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Une passion familiale pour le café, transmise de génération en génération depuis 1932.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-20">
          {/* 1932 */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                1932 - Les Débuts
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200 pb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Tout commence en 1932, dans le cœur de l'Île-Rousse, quand le cousin de mon grand-père crée une petite torréfaction artisanale, dans un esprit simple et passionné. Dans les années 60, mon grand-père et ma grand-mère reprennent l'affaire à leur tour, la faisant grandir lentement, sans jamais trahir ses racines familiales.
                </p>
              </div>
            </div>
          </div>

          {/* L'Entreprise Familiale */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                L'Entreprise Familiale
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200 pb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-600 leading-relaxed text-lg">
                  C'était une entreprise modeste, à taille humaine, guidée par l'amour du bon café et du travail bien fait. À la disparition de mon grand-père, c'est mon père qui a naturellement repris le flambeau, poursuivant cette tradition de transmission et de savoir-faire.
                </p>
              </div>
            </div>
          </div>

          {/* Aujourd'hui */}
          <div className="relative group">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-amber-900" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 group-hover:translate-x-2 transition-transform duration-300">
                La Tradition Continue
              </h2>
            </div>
            <div className="pl-[4.5rem] border-l-2 border-amber-200">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Depuis plus de dix ans maintenant, je travaille moi aussi dans cette torréfaction familiale. Ce lieu, c'est une mémoire, une histoire, mais surtout une passion partagée de génération en génération.
                  </p>
                  <p className="text-xl font-medium text-amber-900 border-l-4 border-amber-900 pl-6 py-2">
                    Aujourd'hui encore, chaque grain torréfié raconte un peu de notre histoire. Celle d'un café corse, artisanal, profondément humain.
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