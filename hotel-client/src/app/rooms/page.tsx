'use client';

import { useRooms } from '../hooks/useRooms';
import { lusitana } from '../lib/fonts';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';
import RoomsTable from '../components/rooms-table';

export default function Home() {
  const rooms = useRooms();

  return (
    <>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>Rooms</h1>
        <Link href="rooms/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <PlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <RoomsTable roomData={rooms} />
    </>
  );
}
