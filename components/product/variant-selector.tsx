'use client';

import { useProduct, useUpdateURL } from 'components/product/product-context';
import { ProductOption, ProductVariant } from 'lib/shopify/types';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const { state, updateOption } = useProduct();
  const updateURL = useUpdateURL();

  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (acc, option) => ({
        ...acc,
        [option.name.toLowerCase()]: option.value
      }),
      {}
    )
  }));

  return (
    <div className="space-y-6">
      {options.map((option) => {
        const optionNameLowerCase = option.name.toLowerCase();
        
        return (
          <div key={option.id} className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#2C2C2C]">
                {option.name === 'Size' ? 'Format' : option.name}
              </label>
              <span className="text-xs text-[#006B3F]">
                {state[optionNameLowerCase] ? `Sélectionné: ${state[optionNameLowerCase]}` : 'Choisir une option'}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const optionParams = { ...state, [optionNameLowerCase]: value };

                const filtered = Object.entries(optionParams).filter(([key, value]) =>
                  options.find(
                    (option) => option.name.toLowerCase() === key && option.values.includes(value)
                  )
                );

                const isAvailableForSale = combinations.find((combination) =>
                  filtered.every(
                    ([key, value]) => combination[key] === value && combination.availableForSale
                  )
                );

                const isActive = state[optionNameLowerCase] === value;

                return (
                  <button
                    key={value}
                    onClick={() => {
                      const newState = updateOption(optionNameLowerCase, value);
                      updateURL(newState);
                    }}
                    className={`
                      min-w-[4rem] px-3 py-2 text-sm border-2 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'border-[#006B3F] bg-[#006B3F] text-white font-medium' 
                        : isAvailableForSale
                          ? 'border-[#006B3F]/10 hover:border-[#006B3F] text-[#2C2C2C]'
                          : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                      }
                    `}
                    disabled={!isAvailableForSale}
                    title={!isAvailableForSale ? 'Option non disponible' : undefined}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
