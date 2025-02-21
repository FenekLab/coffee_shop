'use client';

import { useProduct } from 'components/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import { ShoppingBag } from 'lucide-react';
import { useTransition } from 'react';
import { useCart } from './cart-context';

// Vérifie si le produit a réellement des variantes avec des options différentes
function hasRealOptions(product: Product): boolean {
  // Si nous n'avons pas de variantes ou une seule variante, pas d'options
  if (!product.variants.length || product.variants.length <= 1) return false;
  
  // Si nous avons plusieurs variantes, vérifions si elles ont des options différentes
  const firstVariant = product.variants[0];
  
  // Vérifier si au moins une variante a des options différentes de la première
  return product.variants.slice(1).some(variant => 
    variant.selectedOptions.some(option => {
      const firstVariantOption = firstVariant?.selectedOptions.find(o => o.name === option.name);
      return firstVariantOption?.value !== option.value;
    })
  );
}

// Composant pour les produits sans options
function SimpleAddToCart({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition();
  const { addCartItem } = useCart();

  const isOutOfStock = !product.availableForSale;
  const variant = product.variants[0];

  function handleAdd() {
    if (!variant) return;
    
    try {
      startTransition(() => {
        addCartItem(variant, product);
      });
    } catch (e) {
      console.error('Erreur lors de l\'ajout au panier:', e);
    }
  }

  return (
    <button
      onClick={handleAdd}
      disabled={isPending || isOutOfStock || !variant}
      className={`
        w-full h-12 rounded-xl flex items-center justify-center gap-2 text-base font-medium transition-all duration-200
        ${(isPending || isOutOfStock || !variant)
          ? 'bg-[#006B3F]/50 text-white cursor-not-allowed'
          : 'bg-[#006B3F] text-white hover:bg-[#005432] active:scale-[0.98]'
        }
      `}
    >
      <ShoppingBag className="w-5 h-5" />
      <span>
        {isPending ? 'Ajout en cours...' : isOutOfStock ? 'Rupture de stock' : 'Ajouter au panier'}
      </span>
    </button>
  );
}

// Composant pour les produits avec options
function VariantAddToCart({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition();
  const { state } = useProduct();
  const { addCartItem } = useCart();

  // Vérifier si toutes les options nécessaires sont sélectionnées
  const hasAllOptionsSelected = product.options.every(
    option => state[option.name.toLowerCase()]
  );

  const selectedVariant = hasAllOptionsSelected
    ? product.variants.find((variant: ProductVariant) =>
        variant.selectedOptions.every(
          (option) => option.value === state[option.name.toLowerCase()]
        )
      )
    : null;

  const isOutOfStock = selectedVariant ? !selectedVariant.availableForSale : false;

  function handleAdd() {
    if (!selectedVariant) return;

    try {
      startTransition(() => {
        addCartItem(selectedVariant, product);
      });
    } catch (e) {
      console.error('Erreur lors de l\'ajout au panier:', e);
    }
  }

  return (
    <button
      onClick={handleAdd}
      disabled={isPending || isOutOfStock || !selectedVariant}
      className={`
        w-full h-12 rounded-xl flex items-center justify-center gap-2 text-base font-medium transition-all duration-200
        ${(isPending || isOutOfStock || !selectedVariant)
          ? 'bg-[#006B3F]/50 text-white cursor-not-allowed'
          : 'bg-[#006B3F] text-white hover:bg-[#005432] active:scale-[0.98]'
        }
      `}
    >
      <ShoppingBag className="w-5 h-5" />
      <span>
        {isPending 
          ? 'Ajout en cours...' 
          : isOutOfStock 
          ? 'Rupture de stock' 
          : !selectedVariant 
          ? 'Choisir une option' 
          : 'Ajouter au panier'}
      </span>
    </button>
  );
}

// Composant principal qui choisit la bonne version
export function AddToCart({ product }: { product: Product }) {
  const reallyHasOptions = hasRealOptions(product);

  if (!reallyHasOptions) {
    return <SimpleAddToCart product={product} />;
  }

  return <VariantAddToCart product={product} />;
}

