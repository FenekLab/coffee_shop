'use client';

import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Coffee, Leaf } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Menu } from 'lib/shopify/types';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <div className="relative">
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden"
      >
        <Bars3Icon className="h-4" />
      </button>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-0 translate-y-[-10px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-10px]"
      >
        <div className="fixed left-4 right-4 top-24 mx-auto max-w-[400px] bg-white rounded-xl shadow-lg border border-[#006B3F]/10 overflow-hidden z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#006B3F]/10">
              <span className="text-lg font-medium text-[#2C2C2C]">Menu</span>
              <button
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
                className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 text-black transition-colors"
              >
                <XMarkIcon className="h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <Link
                href="/notre-histoire"
                className="block text-base font-medium text-[#2C2C2C] hover:text-[#006B3F] transition-colors"
                onClick={closeMobileMenu}
              >
                Notre Histoire
              </Link>

              {/* Section Nos Produits */}
              <div className="space-y-3">
                <h3 className="text-base font-medium text-[#2C2C2C]">Nos Produits</h3>
                <div className="ml-4 space-y-3">
                  <Link
                    href="/search/nos-cafes"
                    className="flex items-center text-sm text-[#2C2C2C] hover:text-[#006B3F] transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <Coffee className="w-4 h-4 mr-2" />
                    Nos Cafés
                  </Link>
                  <Link
                    href="/search/nos-thes"
                    className="flex items-center text-sm text-[#2C2C2C] hover:text-[#006B3F] transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <Leaf className="w-4 h-4 mr-2" />
                    Nos Thés
                  </Link>
                </div>
              </div>

              <Link
                href="/processus"
                className="block text-base font-medium text-[#2C2C2C] hover:text-[#006B3F] transition-colors"
                onClick={closeMobileMenu}
              >
                Notre Processus
              </Link>

              <Link
                href="/contact"
                className="block text-base font-medium text-[#2C2C2C] hover:text-[#006B3F] transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Transition>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  );
}
