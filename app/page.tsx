import { getProducts } from 'lib/shopify';
import { Suspense } from 'react';
import HomePageWrapper from '../components/pages/home-wrapper';

export const metadata = {
  description: 'Torréfaction artisanale corse depuis 1932.',
  openGraph: {
    type: 'website'
  }
};

export default async function Page() {
  const products = await getProducts({
    sortKey: 'CREATED_AT',
    reverse: true
  });

  return (
    <Suspense>
      <HomePageWrapper products={products} />
    </Suspense>
  );
}
