import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Coffee, Leaf } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface Props {
  params: Promise<{ collection: string }>;
}

export async function generateMetadata(
  { params }: { params: Promise<{ collection: string }> }
): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const collection = await getCollection(resolvedParams.collection);

    if (!collection) return notFound();

    return {
      title: collection.seo?.title || collection.title,
      description: collection.seo?.description || collection.description || `${collection.title} products`
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Collection',
      description: 'Collection de produits'
    };
  }
}

export default async function CollectionPage({ params }: Props) {
  const resolvedParams = await params;
  const collection = await getCollection(resolvedParams.collection);
  if (!collection) return notFound();
  
  const products = await getCollectionProducts({ 
    collection: resolvedParams.collection
  });

  const isThé = collection.handle.includes('the');

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#006B3F]/10 to-transparent -mx-4 px-4 pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="max-w-2xl px-4">
            <div className="inline-flex items-center justify-center bg-white p-2 md:p-3 rounded-xl shadow-sm mb-4 md:mb-6">
              {isThé ? (
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#006B3F]" />
              ) : (
                <Coffee className="w-5 h-5 md:w-6 md:h-6 text-[#006B3F]" />
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-3 md:mb-4">
              {collection.title}
            </h1>
            <div className="w-16 md:w-20 h-1 bg-[#006B3F] mx-auto mb-3 md:mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg">
              Découvrez notre sélection de {isThé ? 'thés' : 'cafés'} d'exception
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-[#006B3F]/10 mx-4">
        {products.length === 0 ? (
          <div className="text-center py-8 md:py-12">
            <Coffee className="w-10 h-10 md:w-12 md:h-12 text-[#006B3F]/30 mx-auto mb-4" />
            <p className="text-base md:text-lg text-gray-600">
              Aucun produit n'est disponible dans cette collection pour le moment.
            </p>
          </div>
        ) : (
          <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <ProductGridItems products={products} />
          </Grid>
        )}
      </div>

      {/* Collection Description */}
      {collection.description && (
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-[#006B3F]/10 mx-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-4 md:mb-6">
              À propos de nos {collection.title.toLowerCase()}
            </h2>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {collection.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
