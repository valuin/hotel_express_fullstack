'use client';

import {
  CircleStackIcon,
  BookOpenIcon,
  UserGroupIcon,
  HomeIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Dashboard', icon: CircleStackIcon },
  { href: '/reservations', label: 'Reservations', icon: BookOpenIcon },
  { href: '/customers', label: 'Customers', icon: UserGroupIcon },
  { href: '/rooms', label: 'Rooms', icon: HomeIcon },
  { href: '/employees', label: 'Employees', icon: BriefcaseIcon },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={clsx(
              'flex gap-2 bg-zinc-100 rounded-xl p-4 transition ease-in-out hover:bg-zinc-200 hover:text-zinc-900',
              {
                'bg-zinc-200 text-zinc-900 border border-zinc-900':
                  pathname === link.href,
              }
            )}
          >
            <link.icon className="w-6 h-6" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
