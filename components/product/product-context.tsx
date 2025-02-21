'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';

type ProductState = {
  [key: string]: string;
} & {
  image?: string;
};

type Action = { type: 'update'; payload: Record<string, string> };

interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<Action>;
  updateOption: (name: string, value: string) => ProductState;
  updateImage: (index: string) => ProductState;
}

const ProductContext = createContext<ProductContextType | null>(null);

function productReducer(state: ProductState, action: Action): ProductState {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function ProductProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  
  const getInitialState = () => {
    // Commencer avec un état vide
    const params: ProductState = {};
    
    // Si nous avons des paramètres d'URL, les ajouter à l'état
    if (searchParams.size > 0) {
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
    }
    
    return params;
  };

  const [state, dispatch] = useReducer(productReducer, getInitialState());

  const updateOption = (name: string, value: string) => {
    const newState = { [name]: value };
    dispatch({ type: 'update', payload: newState });
    return { ...state, ...newState };
  };

  const updateImage = (index: string) => {
    const newState = { image: index };
    dispatch({ type: 'update', payload: newState });
    return { ...state, ...newState };
  };

  const value = useMemo(
    () => ({
      state,
      dispatch,
      updateOption,
      updateImage
    }),
    [state]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}

export function useUpdateURL() {
  const router = useRouter();

  return (state: ProductState) => {
    // Ne mettre à jour l'URL que si nous avons des paramètres à ajouter
    if (Object.keys(state).length > 0) {
      const newParams = new URLSearchParams(window.location.search);
      Object.entries(state).forEach(([key, value]) => {
        newParams.set(key, value);
      });
      router.push(`?${newParams.toString()}`, { scroll: false });
    }
  };
}
