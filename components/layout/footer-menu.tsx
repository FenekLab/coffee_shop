'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface FooterMenuItemProps {
  href: string;
  children: React.ReactNode;
}

export function FooterMenuItem({ href, children }: FooterMenuItemProps) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === href);

  useEffect(() => {
    setActive(pathname === href);
  }, [pathname, href]);

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'text-white/80 hover:text-white transition-colors',
          {
            'text-white': active
          }
        )}
      >
        {children}
      </Link>
    </li>
  );
}

interface FooterMenuProps {
  title: string;
  items: { href: string; label: string }[];
}

export default function FooterMenu({ title, items }: FooterMenuProps) {
  if (!items.length) return null;

  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterMenuItem key={item.href} href={item.href}>
            {item.label}
          </FooterMenuItem>
        ))}
      </ul>
    </div>
  );
}
