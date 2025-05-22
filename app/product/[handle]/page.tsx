import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProducts } from 'lib/shopify';
import { Image, Product } from 'lib/shopify/types';
import { Coffee } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage?.url || '',
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      
      <div className="bg-[#F5F5F5] min-h-screen py-4 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Colonne de gauche - Images */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-[#006B3F]/10 overflow-hidden">
                {/* Gallery */}
                <div className="bg-[#006B3F]/5 p-3 md:p-8">
                  <Suspense
                    fallback={
                      <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-lg md:rounded-xl bg-[#006B3F]/5 flex items-center justify-center">
                        <Coffee className="w-8 h-8 md:w-12 md:h-12 text-[#006B3F]/30" />
                      </div>
                    }
                  >
                    <Gallery
                      images={product.images.slice(0, 5).map((image: Image) => ({
                        src: image.url,
                        altText: image.altText
                      }))}
                    />
                  </Suspense>
                </div>

                {/* Description Section - Visible uniquement sur desktop */}
                <div className="hidden lg:block p-6 md:p-8 border-t border-[#006B3F]/10">
                  <div className="prose prose-green max-w-none">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-4 md:mb-6">
                      Description
                    </h2>
                    <div 
                      className="text-gray-600 leading-relaxed text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: product.descriptionHtml || '' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne de droite - Informations produit */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-[#006B3F]/10">
                <div className="flex flex-col h-full">
                  <Suspense fallback={null}>
                    <ProductDescription product={product} />
                  </Suspense>
                  <RelatedProducts id={product.id} />
                </div>
              </div>

              {/* Description Section - Visible uniquement sur mobile */}
              <div className="lg:hidden mt-4 md:mt-6 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-[#006B3F]/10">
                <div className="prose prose-green max-w-none">
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-4 md:mb-6">
                    Description
                  </h2>
                  <div 
                    className="text-gray-600 leading-relaxed text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml || '' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const allProducts = await getProducts({
    sortKey: 'CREATED_AT',
    reverse: true
  });
  
  const relatedProducts = allProducts.filter((product: Product) => product.id !== id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mt-6 md:mt-8">
      <div className="h-px bg-[#006B3F]/10 mb-6 md:mb-8"></div>
      <h2 className="text-lg md:text-xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-4 md:mb-6">
        Vous aimerez aussi
      </h2>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {relatedProducts.slice(0, 2).map((product: Product) => (
          <Link
            key={product.handle}
            href={`/product/${product.handle}`}
            className="group block bg-[#006B3F]/5 rounded-lg p-2 md:p-4 transition-all duration-300 hover:bg-[#006B3F]/10"
          >
            <div className="relative w-full aspect-square rounded-lg bg-white overflow-hidden mb-2 md:mb-3 border border-[#006B3F]/10">
              {product.featuredImage ? (
                <img
                  src={product.featuredImage.url}
                  alt={product.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Coffee className="w-5 h-5 md:w-8 md:h-8 text-[#006B3F]/30" />
                </div>
              )}
            </div>
            <h3 className="text-xs md:text-sm font-medium text-[#2C2C2C] group-hover:text-[#006B3F] transition-colors line-clamp-2 mb-1">
              {product.title}
            </h3>
            <p className="text-xs md:text-sm font-medium text-[#006B3F]">
              {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2).replace('.', ',')}€
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
