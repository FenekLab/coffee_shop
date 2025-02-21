'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { Package } from 'lucide-react';
import { useEffect } from 'react';
import { useProduct } from './product-context';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const { state, dispatch } = useProduct();
  
  const hasOptions = product.options.length > 0;
  
  // Pour les produits sans options, on s'assure que la première variante est sélectionnée
  useEffect(() => {
    if (!hasOptions && product.variants[0]) {
      // Initialiser avec la première variante pour les produits sans options
      const firstVariant = product.variants[0];
      const initialState = firstVariant.selectedOptions.reduce(
        (acc, option) => ({
          ...acc,
          [option.name.toLowerCase()]: option.value
        }),
        {}
      );
      dispatch({ type: 'update', payload: initialState });
    }
  }, [hasOptions, product.variants, dispatch]);

  // Sélection de la variante
  const selectedVariant = !hasOptions
    ? product.variants[0]
    : product.variants.find((variant) =>
        variant.selectedOptions.every(
          (option) => option.value === state[option.name.toLowerCase()]
        )
      );

  // Prix
  const price = selectedVariant
    ? selectedVariant.price
    : product.priceRange.minVariantPrice;

  return (
    <div className="flex flex-col">
      {/* En-tête */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-[#2C2C2C] tracking-tight mb-4">
          {product.title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="bg-[#006B3F] px-4 py-2 rounded-lg">
            <Price
              amount={price.amount}
              currencyCode={price.currencyCode}
              className="text-lg font-medium text-white"
            />
          </div>
          {product.availableForSale ? (
            <span className="text-[#006B3F] text-sm font-medium">En stock</span>
          ) : (
            <span className="text-red-500 text-sm font-medium">Rupture de stock</span>
          )}
        </div>
      </div>

      {/* Options - Afficher uniquement si le produit a des options */}
      {hasOptions && (
        <div className="mb-6">
          <VariantSelector options={product.options} variants={product.variants} />
        </div>
      )}

      {/* Informations de livraison */}
      <div className="mb-6 p-4 bg-[#006B3F]/5 rounded-xl">
        <div className="flex items-start space-x-3">
          <Package className="w-5 h-5 text-[#006B3F] mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-[#2C2C2C] mb-1">
              Livraison dans toute la Corse et en France métropolitaine
            </h3>
            
          </div>
        </div>
      </div>

      {/* Bouton d'ajout au panier */}
      <div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}
