import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import { Suspense } from 'react';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="pt-0 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}

            {/* Main Content */}
            <div className="flex-1">
              <Suspense fallback={<div>Chargement du contenu...</div>}>
                <ChildrenWrapper>{children}</ChildrenWrapper>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
