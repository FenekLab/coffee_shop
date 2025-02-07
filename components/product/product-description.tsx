'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product, ProductVariant } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';
import { useProduct } from './product-context';

export function ProductDescription({ product }: { product: Product }) {
  const { state } = useProduct();
  
  // Trouver la variante sélectionnée
  const selectedVariant = product.variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );

  // Utiliser le prix de la variante sélectionnée ou le prix par défaut
  const price = selectedVariant
    ? selectedVariant.price
    : product.priceRange.maxVariantPrice;

  return (
    <>
      <div className="mb-6 flex flex-col border-b border-neutral-200 pb-6">
        <h1 className="mb-2 text-4xl font-medium text-[#2C2C2C]">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-[#006B3F] p-2 text-sm text-white">
          <Price
            amount={price.amount}
            currencyCode={price.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-relaxed text-[#4A4A4A]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
