import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <>
      <div className="h-[80px]"></div>
      
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="h-[2px] w-full bg-[#006B3F]"></div>
        
        <div className="border-b border-[#E5E5E5]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between h-[78px] px-8">
              {/* Logo */}
              <Link href="/" className="flex flex-col">
                <span className="text-[24px] font-bold text-[#006B3F]">
                  LE BON CAFÉ CORSE
                </span>
                <span className="text-[12px] text-black/70">
                  DEPUIS 1932
                </span>
              </Link>

              {/* Navigation */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center space-x-12">
                  <Link 
                    href="/notre-histoire" 
                    className="text-black hover:text-[#006B3F] text-[15px]"
                  >
                    Notre Histoire
                  </Link>
                  <Link 
                    href="/search" 
                    className="text-black hover:text-[#006B3F] text-[15px]"
                  >
                    Nos Cafés
                  </Link>
                  <Link 
                    href="/processus" 
                    className="text-black hover:text-[#006B3F] text-[15px]"
                  >
                    Notre Processus
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-black hover:text-[#006B3F] text-[15px]"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Panier */}
              <div className="hidden md:block">
                <CartModal />
              </div>

              {/* Menu Mobile */}
              <div className="md:hidden flex items-center">
                <Suspense fallback={null}>
                  <MobileMenu menu={menu} />
                </Suspense>
                <div className="ml-2">
                  <CartModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
