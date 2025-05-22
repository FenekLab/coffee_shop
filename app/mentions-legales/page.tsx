import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Le Bon Café',
  description: 'Mentions légales et informations juridiques de Le Bon Café Corse.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 text-white">Mentions Légales</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-20">
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md space-y-6 md:space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">1. Informations légales</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Le site leboncafecorse.fr est édité par :<br />
              Le Bon Café Corse<br />
              Pl. Marcel Delaunay<br />
              20220 L'Île-Rousse<br />
              France<br />
              SIRET : 48066094300014<br />
              TVA Intracommunautaire : FR47480660943
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">2. Directeur de la publication</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              [Nom du directeur de la publication]<br />
              Téléphone : <a href="tel:+33495600240" className="hover:text-amber-900 transition-colors">04 95 60 02 40</a><br />
              Email : <a href="mailto:contact@leboncafecorse.fr" className="hover:text-amber-900 transition-colors">contact@leboncafecorse.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">3. Hébergement</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ce site est hébergé par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              [Contact de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou représentation, totale ou partielle, du site ou de l'un des éléments qui le composent, 
              sans l'autorisation expresse de Le Bon Café Corse, est interdite et constituerait une contrefaçon sanctionnée 
              par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">5. Protection des données personnelles</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Les informations collectées sur ce site sont traitées conformément à notre politique de confidentialité, 
              accessible via le lien en bas de page. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 
              modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
              de rectification, et de suppression de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, 
              vous acceptez leur utilisation. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter 
              notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 md:mb-4">7. Loi applicable</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français 
              seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 