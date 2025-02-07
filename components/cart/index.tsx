'use client';

import { Button } from 'components/ui/button';
import { ShoppingBag } from 'lucide-react';

export function Cart() {
  return (
    <Button
      aria-label="Panier"
      variant="outline"
      className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
    >
      <ShoppingBag className="h-4" />
      <span className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-[#006B3F] text-[11px] font-medium text-white">
        0
      </span>
    </Button>
  );
}

export { default as Cart } from './modal'; 