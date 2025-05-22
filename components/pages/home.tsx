'use client';

import { Button } from 'components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Collection, Product } from 'lib/shopify/types';
import { Bean, ChevronLeft, ChevronRight, Coffee, Facebook, Instagram, Leaf, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Suspense, useCallback } from 'react';

export default function HomePage({ products, collections }: { products: Product[], collections: Collection[] }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32 text-white">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Café artisanal corse" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#006B3F]/40"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 pattern-coffee-beans opacity-30"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight mb-8">
              L'Excellence du Café
              <br />
              <span className="text-white/90">Artisanal Corse</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed font-light">
              Au cœur de la Corse, notre torréfaction perpétue un savoir-faire familial depuis 1932. 
              Chaque grain raconte une histoire de passion et d'authenticité.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" variant="secondary" className="bg-white text-[#006B3F] hover:bg-gray-100 text-base font-medium tracking-wide">
                  Découvrir nos cafés
                </Button>
              </Link>
              <Link href="/notre-histoire">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base font-medium tracking-wide">
                  Notre histoire
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 relative bg-gradient-to-b from-[#006B3F]/10 via-white to-[#F5F5F5]">
        <div className="absolute inset-0 pattern-coffee-beans opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <span className="text-[#006B3F] font-medium text-base mb-3 inline-block tracking-widest uppercase">
              Explorez
            </span>
            <h2 className="text-5xl font-serif font-bold text-[#2C2C2C] mb-6 tracking-tight">Nos Collections</h2>
            <div className="w-24 h-1 bg-[#006B3F] mx-auto mb-6"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {collections.map((collection) => {
              const firstSentence = collection.description?.split(/[.!?]/)?.filter(s => s.trim())?.[0] || '';
              const isThé = collection.handle.includes('the');
              
              return (
                <Link
                  key={collection.handle}
                  href={collection.path}
                  className="group transform transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-white rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden border-2 border-[#006B3F]/10 hover:border-[#006B3F]">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#006B3F]/10 to-transparent rounded-full -mr-20 -mt-20 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#006B3F]/10 to-transparent rounded-full -ml-16 -mb-16 transition-all duration-300 group-hover:scale-110"></div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div className="bg-[#006B3F] p-3 rounded-xl mr-4 transform group-hover:rotate-12 transition-all duration-300">
                          {isThé ? (
                            <Leaf className="w-8 h-8 text-white" />
                          ) : (
                            <Coffee className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-[#2C2C2C] group-hover:text-[#006B3F] transition-colors tracking-tight">
                          {collection.title}
                        </h3>
                      </div>
                      {firstSentence && (
                        <p className="text-gray-600 text-lg mb-8 line-clamp-2 font-light leading-relaxed">{firstSentence}.</p>
                      )}
                      <div className="flex items-center text-[#006B3F] font-medium text-lg tracking-wide">
                        <span className="mr-2 group-hover:mr-4 transition-all">Explorer la collection</span>
                        <ChevronRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#006B3F] text-white text-sm font-medium px-3 py-1 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 tracking-wide">
                      {isThé ? 'Thés' : 'Cafés'}
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gradient-to-b from-[#006B3F]/10 via-white to-[#F5F5F5] relative overflow-hidden">
        <div className="absolute inset-0 pattern-coffee-beans opacity-10"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/torrefaction.jpg" 
                    alt="Processus de torréfaction artisanale" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#006B3F] p-4 rounded-xl shadow-xl">
                  <Bean className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div>
                <span className="text-[#006B3F] font-medium text-base mb-3 inline-block tracking-widest uppercase">
                  Notre Expertise
                </span>
                <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight text-[#2C2C2C]">
                  L'Art de la Torréfaction Artisanale
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006B3F] flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">Sélection des Grains</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Nous sélectionnons minutieusement les meilleurs grains de café vert, 
                        en privilégiant des origines exceptionnelles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006B3F] flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">Torréfaction Maîtrisée</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Chaque lot est torréfié avec précision pour révéler les arômes 
                        uniques de chaque origine.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006B3F] flex items-center justify-center flex-shrink-0">
                      <Bean className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]">Fraîcheur Garantie</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Nos cafés sont torréfiés en petites quantités pour garantir 
                        une fraîcheur optimale.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link href="/notre-processus" className="inline-block mt-8">
                  <Button variant="outline" size="lg" className="border-2 border-[#006B3F] text-[#006B3F] hover:bg-[#006B3F] hover:text-white text-base font-medium tracking-wide">
                    Découvrir notre processus
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] via-white to-[#006B3F]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Tradition & Savoir-faire",
                description: "Une expertise transmise de génération en génération depuis 1932",
              },
              {
                icon: <Bean className="h-8 w-8" />,
                title: "Sélection Rigoureuse",
                description: "Des grains minutieusement choisis pour leurs qualités exceptionnelles",
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Torréfaction Artisanale",
                description: "Un processus maîtrisé révélant les meilleurs arômes",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-[#006B3F]/10 hover:border-[#006B3F] transition-colors group hover:bg-white"
              >
                <div className="mb-4 text-[#006B3F]">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-2 text-[#006B3F] tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#006B3F] mb-4 tracking-tight">Nos Cafés d'Exception</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Découvrez notre sélection de cafés torréfiés artisanalement dans notre atelier corse, 
              perpétuant une tradition familiale depuis 1932.
            </p>
          </div>
          <Suspense>
            <div className="relative max-w-7xl mx-auto">
              <ProductCarousel products={products} />
            </div>
          </Suspense>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-20 bg-[#006B3F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight text-white">Visitez Notre Atelier</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white opacity-90 font-light leading-relaxed text-lg">
            Rendez-vous à notre atelier au cœur de la Corse et découvrez les secrets de
            notre torréfaction artisanale.
          </p>
          <Link href="/notre-histoire">
            <Button variant="secondary" size="lg" className="bg-white text-[#006B3F] hover:bg-gray-100 text-base font-medium tracking-wide">
              Nous trouver
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
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
                <a href="https://facebook.com/leboncafecorse" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/leboncafecorse" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
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
                {products.slice(0, 5).map((product) => (
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
                  Pl. Marcel Delaunay<br />
                  20220 L'Île-Rousse<br />
                  France
                </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#006B3F]" />
                  <a href="tel:+33495600240" className="text-white/80 hover:text-white transition-colors">
                  04 95 60 02 40
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
                © {new Date().getFullYear()} Le Bon Café Corse. Tous droits réservés.
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
    </div>
  );
}

function ProductCarousel({ products }: { products: Product[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div key={product.handle} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
              <Link
                href={`/product/${product.handle}`}
                className="block bg-white rounded-xl shadow-sm group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-[300px] mb-6 bg-[#006B3F]/5 rounded-t-xl overflow-hidden">
                  {product.featuredImage ? (
                    <img
                      src={product.featuredImage.url}
                      alt={product.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#006B3F]">
                      <Coffee className="w-16 h-16" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-[#006B3F] tracking-tight group-hover:text-[#005432] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#006B3F] font-medium tracking-wide">
                    À partir de {product.priceRange.minVariantPrice.amount}€
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-[#006B3F] hover:bg-[#006B3F] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:ring-offset-2"
        onClick={scrollPrev}
        aria-label="Précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-[#006B3F] hover:bg-[#006B3F] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:ring-offset-2"
        onClick={scrollNext}
        aria-label="Suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
} 