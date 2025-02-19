import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="pt-0 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-none">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#006B3F]/10">
                  <h2 className="text-lg font-bold text-[#2C2C2C] mb-4">Collections</h2>
                  <Collections />
                </div>
                
               
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
