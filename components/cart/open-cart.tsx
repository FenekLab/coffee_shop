import clsx from 'clsx';
import { ShoppingBag } from 'lucide-react';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#006B3F] text-[#006B3F] transition-all hover:bg-[#006B3F] hover:text-white group">
      <ShoppingBag
        className={clsx('h-5 w-5 transition-all ease-in-out', className)}
      />

      {quantity ? (
        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#006B3F] text-[11px] font-medium text-white border-2 border-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
