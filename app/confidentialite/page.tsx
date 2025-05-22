import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Le Bon Café',
  description: 'Politique de confidentialité et protection des données personnelles de Le Bon Café Corse.',
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Politique de Confidentialité</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl p-8 shadow-md space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">1. Collecte des données personnelles</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous collectons les informations que vous nous fournissez lors de la création de votre compte, 
              de vos commandes ou de vos interactions avec notre service client. Ces informations peuvent inclure :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Adresse de livraison</li>
              <li>Numéro de téléphone</li>
              <li>Historique des commandes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">2. Utilisation des données</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Traiter vos commandes et assurer leur livraison</li>
              <li>Gérer votre compte client</li>
              <li>Vous informer sur l'état de vos commandes</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">3. Protection des données</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              personnelles contre tout accès, modification, divulgation ou destruction non autorisé. 
              Vos données sont stockées sur des serveurs sécurisés et l'accès est strictement limité 
              aux employés qui en ont besoin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">4. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies 
              sont de petits fichiers texte stockés sur votre appareil qui nous aident à :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Mémoriser vos préférences</li>
              <li>Comprendre comment vous utilisez notre site</li>
              <li>Améliorer nos services</li>
              <li>Sécuriser votre session</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">5. Vos droits</h2>
            <p className="text-gray-600 leading-relaxed">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter :<br /><br />
              Le Bon Café Corse<br />
              Pl. Marcel Delaunay<br />
              20220 L'Île-Rousse<br />
              France<br /><br />
              Email : contact@leboncafecorse.fr<br />
              Téléphone : 04 95 60 02 40
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">7. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications prendront effet dès leur publication sur notre site. Nous vous encourageons 
              à consulter régulièrement cette page pour rester informé des éventuelles mises à jour.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 