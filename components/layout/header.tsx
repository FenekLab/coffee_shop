'use client';

import { Cart } from 'components/cart';
import { Button } from 'components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-[#006B3F]">
            LE BON CAFÉ CORSE
            <span className="block text-sm font-normal">DEPUIS 1932</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/notre-histoire" className="hover:text-[#006B3F] transition-colors">
              NOTRE HISTOIRE
            </Link>
            <Link href="/search" className="hover:text-[#006B3F] transition-colors">
              NOS CAFÉS
            </Link>
            <Link href="/processus" className="hover:text-[#006B3F] transition-colors">
              PROCESSUS
            </Link>
            <Link href="/contact" className="hover:text-[#006B3F] transition-colors">
              CONTACT
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/search">
              <Button className="hidden md:flex bg-[#006B3F] hover:bg-[#005432]">
                COMMANDER
              </Button>
            </Link>
            <Suspense fallback={null}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 