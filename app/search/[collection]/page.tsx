import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Coffee, Leaf } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
  const collection = await getCollection(params.collection);
  if (!collection) return notFound();
  
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const isThé = collection.handle.includes('the');

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#006B3F]/10 to-transparent -mx-4 px-4 pt-8 pb-16">
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center bg-white p-3 rounded-xl shadow-sm mb-6">
              {isThé ? (
                <Leaf className="w-6 h-6 text-[#006B3F]" />
              ) : (
                <Coffee className="w-6 h-6 text-[#006B3F]" />
              )}
            </div>
            <h1 className="text-4xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-4">
              {collection.title}
            </h1>
            <div className="w-20 h-1 bg-[#006B3F] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Découvrez notre sélection de {isThé ? 'thés' : 'cafés'} d'exception
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#006B3F]/10">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <Coffee className="w-12 h-12 text-[#006B3F]/30 mx-auto mb-4" />
            <p className="text-lg text-gray-600">
              Aucun produit n'est disponible dans cette collection pour le moment.
            </p>
          </div>
        ) : (
          <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <ProductGridItems products={products} />
          </Grid>
        )}
      </div>

      {/* Collection Description */}
      {collection.description && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#006B3F]/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-6">
              À propos de nos {collection.title.toLowerCase()}
            </h2>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-600 leading-relaxed">
                {collection.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
