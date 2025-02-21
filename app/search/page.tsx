import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const revalidate = 60;

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const { sort, q: searchValue = '' } = resolvedSearchParams;
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue as string });
  const resultsText = products.length > 1 ? 'résultats' : 'résultat';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'Aucun produit trouvé'
            : `${products.length} ${resultsText} pour "${searchValue}"`}
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
