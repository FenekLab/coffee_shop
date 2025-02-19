import { getProducts } from 'lib/shopify';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const products = await getProducts({
    sortKey: 'TITLE',
    reverse: false
  });
  
  // Prendre les 5 premiers produits
  const firstFiveProducts = products.slice(0, 5);
  
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* À Propos */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  LE BON CAFÉ CORSE
                </span>
                <span className="text-sm text-white/70">
                  DEPUIS 1932
                </span>
              </Link>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Torréfaction artisanale corse perpétuant un savoir-faire familial depuis 1932.
              Notre passion : vous offrir des cafés d'exception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/notre-histoire" className="text-white/80 hover:text-white transition-colors">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-white/80 hover:text-white transition-colors">
                  Nos Cafés
                </Link>
              </li>
              <li>
                <Link href="/processus" className="text-white/80 hover:text-white transition-colors">
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Nos Cafés */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Cafés</h3>
            <ul className="space-y-3">
              {firstFiveProducts.map((product) => (
                <li key={product.handle}>
                  <Link 
                    href={`/product/${product.handle}`} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#006B3F] flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Route des Sanguinaires<br />
                  20000 Ajaccio
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#006B3F]" />
                <a href="tel:+33495123456" className="text-white/80 hover:text-white transition-colors">
                  04 95 12 34 56
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#006B3F]" />
                <a href="mailto:contact@leboncafecorse.fr" className="text-white/80 hover:text-white transition-colors">
                  contact@leboncafecorse.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © {currentYear} Le Bon Café Corse. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm text-white/60 hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <Link href="/cgv" className="text-sm text-white/60 hover:text-white transition-colors">
                CGV
              </Link>
              <Link href="/confidentialite" className="text-sm text-white/60 hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
