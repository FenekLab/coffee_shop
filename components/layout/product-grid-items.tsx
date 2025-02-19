import Grid from 'components/grid';
import { Product } from 'lib/shopify/types';
import { Coffee } from 'lucide-react';
import Link from 'next/link';

function formatPrice(amount: string): string {
  const price = parseFloat(amount);
  return price.toFixed(2).replace('.', ',');
}

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            href={`/product/${product.handle}`}
            className="group relative block overflow-hidden"
            prefetch={true}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-white rounded-xl">
              {product.featuredImage ? (
                <img
                  src={product.featuredImage.url}
                  alt={product.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#006B3F]/5">
                  <Coffee className="w-12 h-12 text-[#006B3F]/30" />
                </div>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="block text-sm font-medium text-[#006B3F] text-center">
                      Voir le produit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-1">
              <h3 className="font-serif text-base font-medium text-[#2C2C2C] group-hover:text-[#006B3F] transition-colors duration-300">
                {product.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-[#006B3F]">
                  {formatPrice(product.priceRange.minVariantPrice.amount)}€
                </span>
                <span className="text-sm text-gray-500">
                  TTC
                </span>
              </div>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
