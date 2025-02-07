'use client';

import { Product } from 'lib/shopify/types';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('./home'), {
  ssr: false
});

export default function HomePageWrapper({ products }: { products: Product[] }) {
  return <HomePage products={products} />;
} 