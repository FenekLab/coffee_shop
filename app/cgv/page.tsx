import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Le Bon Café',
  description: 'Conditions générales de vente de Le Bon Café Corse.',
};

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Conditions Générales de Vente</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl p-8 shadow-md space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">1. Objet</h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes conditions générales de vente régissent les relations contractuelles entre 
              Le Bon Café Corse et ses clients. Toute commande implique l'acceptation sans réserve 
              des présentes conditions générales de vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">2. Prix</h2>
            <p className="text-gray-600 leading-relaxed">
              Les prix sont indiqués en euros TTC. Le Bon Café Corse se réserve le droit de modifier 
              ses prix à tout moment, étant entendu que le prix figurant sur le site le jour de la 
              commande sera le seul applicable à l'acheteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">3. Commande</h2>
            <p className="text-gray-600 leading-relaxed">
              Les commandes sont passées sur le site internet leboncafecorse.fr. La confirmation de 
              commande entraîne l'acceptation des présentes conditions de vente et la reconnaissance 
              d'en avoir parfaite connaissance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">4. Paiement</h2>
            <p className="text-gray-600 leading-relaxed">
              Le règlement des achats s'effectue par carte bancaire. Le débit de la carte est effectué 
              au moment de la commande. La transaction est immédiatement débitée après vérification 
              des informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">5. Livraison</h2>
            <p className="text-gray-600 leading-relaxed">
              Les délais de livraison sont donnés à titre indicatif. En Corse, la livraison se fait 
              en direct dans la journée ou sous 24h maximum. Sur le continent, nous expédions en 
              Mondial Relay (ou autre selon préférence) sous 3 à 4 jours ouvrés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">6. Droit de rétractation</h2>
            <p className="text-gray-600 leading-relaxed">
              Conformément aux dispositions légales en vigueur, vous disposez d'un délai de 14 jours 
              à compter de la réception de vos produits pour exercer votre droit de rétractation sans 
              avoir à justifier de motifs ni à payer de pénalité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">7. Garantie</h2>
            <p className="text-gray-600 leading-relaxed">
              Tous nos produits bénéficient de la garantie légale de conformité et de la garantie des 
              vices cachés. En cas de non-conformité d'un produit vendu, il pourra être retourné, 
              échangé ou remboursé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">8. Service clientèle</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute information ou question, notre service clientèle est à votre disposition :<br />
              Téléphone : 04 95 60 02 40<br />
              Email : contact@leboncafecorse.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">9. Litiges</h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes conditions de vente sont soumises au droit français. En cas de litige, 
              une solution amiable sera recherchée avant toute action judiciaire. À défaut, les 
              tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 