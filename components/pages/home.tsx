'use client';

import Grid from 'components/grid';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import { Bean, ChevronRight, Coffee, Leaf } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

export default function HomePage({ products }: { products: Product[] }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32 bg-[#006B3F] text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 pattern-coffee-beans opacity-10"></div>
        </motion.div>
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              L'Excellence du Café
              <br />
              Artisanal Corse
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Au cœur de la Corse, notre torréfaction perpétue un savoir-faire familial depuis 1932. 
              Chaque grain raconte une histoire de passion et d'authenticité.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" variant="secondary" className="bg-white text-[#006B3F] hover:bg-gray-100">
                  Découvrir nos cafés
                </Button>
              </Link>
              <Link href="/notre-histoire">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Notre histoire
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
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
                className="p-8 bg-white rounded-xl border-2 border-[#006B3F]/10 hover:border-[#006B3F] transition-colors group"
              >
                <div className="mb-4 text-[#006B3F]">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#006B3F]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#006B3F] mb-4">Nos Cafés d'Exception</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de cafés torréfiés artisanalement dans notre atelier corse, 
              perpétuant une tradition familiale depuis 1932.
            </p>
          </div>
          <Suspense>
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.handle}
                  href={`/product/${product.handle}`}
                  className="bg-white p-8 rounded-xl shadow-sm group cursor-pointer"
                >
                  <div className="relative h-[300px] mb-6 bg-[#006B3F]/5 rounded-lg">
                    {product.featuredImage ? (
                      <img
                        src={product.featuredImage.url}
                        alt={product.title}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#006B3F]">
                        <Coffee className="w-16 h-16" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#006B3F]">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-[#006B3F] font-bold">
                    À partir de {product.priceRange.minVariantPrice.amount}€
                  </p>
                </Link>
              ))}
            </Grid>
          </Suspense>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-20 bg-[#006B3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Visitez Notre Atelier</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Rendez-vous à notre atelier au cœur de la Corse et découvrez les secrets de
            notre torréfaction artisanale.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-[#006B3F] hover:bg-gray-100">
            Nous trouver
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
} 