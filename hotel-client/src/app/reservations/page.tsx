'use client';

import { useReservations } from '../hooks/useReservations';
import { lusitana } from '../lib/fonts';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import ReservationsTable from '../components/reservations-table';

export default function Home() {
  const reservations = useReservations();

  return (
    <>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Reservations
        </h1>
        <Link href="reservations/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <DocumentPlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <ReservationsTable reservationsData={reservations} />
    </>
  );
}
