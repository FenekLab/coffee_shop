'use client';

import clsx from 'clsx';
import type { SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';
import { Coffee, Leaf } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';

export function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;
  const isThé = item.path.includes('the');

  newParams.delete('q');

  return (
    <li className="w-full" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx(
          'flex items-center w-full px-4 py-2 text-sm rounded-lg transition-all duration-200',
          {
            'bg-[#006B3F] text-white font-medium': active,
            'text-gray-600 hover:bg-[#006B3F]/10 hover:text-[#006B3F]': !active
          }
        )}
      >
        <span className="mr-3">
          {isThé ? (
            <Leaf className={clsx('w-4 h-4', {
              'text-white': active,
              'text-[#006B3F]': !active
            })} />
          ) : (
            <Coffee className={clsx('w-4 h-4', {
              'text-white': active,
              'text-[#006B3F]': !active
            })} />
          )}
        </span>
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="w-full" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx(
          'block w-full px-4 py-2 text-sm rounded-lg transition-all duration-200',
          {
            'bg-[#006B3F] text-white font-medium': active,
            'text-gray-600 hover:bg-[#006B3F]/10 hover:text-[#006B3F]': !active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
