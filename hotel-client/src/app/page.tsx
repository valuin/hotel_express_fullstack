'use client';

import { lusitana } from './lib/fonts';
import DashboardCards from './components/dashboard-cards';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import RecentReservations from './components/recent-reservations-table';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Dashboard
        </h1>
        <DashboardCards />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <h1 className={`text-2xl font-bold ${lusitana.className}`}>
            Recent Reservations
          </h1>
          <Link href="/reservations">
            <Button
              className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
              variant="outline"
            >
              <ArrowRightIcon className="w-6" />
            </Button>
          </Link>
        </div>
        <RecentReservations />
      </div>
    </div>
  );
}

