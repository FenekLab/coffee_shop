'use client';

import { Collection, Product } from 'lib/shopify/types';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('./home'), {
  ssr: false
});

export default function HomePageWrapper({ 
  products,
  collections 
}: { 
  products: Product[];
  collections: Collection[];
}) {
  return <HomePage products={products} collections={collections} />;
} 