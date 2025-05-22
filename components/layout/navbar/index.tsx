import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { ChevronDown, Coffee, Leaf } from 'lucide-react';
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
              <div className="flex-1 flex justify-center -ml-28">
                <div className="hidden md:flex items-center space-x-12">
                  <Link 
                    href="/notre-histoire" 
                    className="text-black hover:text-[#006B3F] text-[15px] transition-colors"
                  >
                    Notre Histoire
                  </Link>
                  
                  {/* Menu déroulant Nos Produits */}
                  <div className="relative group">
                    <button className="flex items-center text-black hover:text-[#006B3F] text-[15px] transition-colors group-hover:text-[#006B3F]">
                      Nos Produits
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-[#006B3F]/10 overflow-hidden min-w-[200px]">
                        <Link 
                          href="/search/nos-cafes-dexception" 
                          className="flex items-center px-6 py-3 text-[15px] text-black hover:text-[#006B3F] hover:bg-[#006B3F]/5 transition-colors"
                        >
                          <Coffee className="w-4 h-4 mr-3" />
                          Nos Cafés
                        </Link>
                        <Link 
                          href="/search/nos-thes" 
                          className="flex items-center px-6 py-3 text-[15px] text-black hover:text-[#006B3F] hover:bg-[#006B3F]/5 transition-colors"
                        >
                          <Leaf className="w-4 h-4 mr-3" />
                          Nos Thés
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/processus" 
                    className="text-black hover:text-[#006B3F] text-[15px] transition-colors"
                  >
                    Notre Processus
                  </Link>
                  <Link 
                    href="/professionnels" 
                    className="text-black hover:text-[#006B3F] text-[15px] transition-colors"
                  >
                    Professionnels
                  </Link>
                </div>
              </div>

              {/* Menu Mobile et Panier */}
              <div className="flex items-center">
                <div className="md:hidden">
                  <Suspense fallback={null}>
                    <MobileMenu menu={menu} />
                  </Suspense>
                </div>
                <CartModal />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
