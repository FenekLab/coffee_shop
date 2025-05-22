import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getProducts } from 'lib/shopify';

export const revalidate = 60;



interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const { q: searchValue = '' } = resolvedSearchParams;

  const products = await getProducts({ query: searchValue as string });
  const resultsText = products.length > 1 ? 'résultats' : 'résultat';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 text-white">Nos Produits</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {searchValue ? (
          <p className="mb-6 text-lg text-gray-600 text-center">
            {products.length === 0
              ? 'Aucun produit trouvé'
              : `${products.length} ${resultsText} pour "${searchValue}"`}
          </p>
        ) : null}
        {products.length > 0 ? (
          <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ProductGridItems products={products} />
          </Grid>
        ) : null}
      </div>
    </div>
  );
}
