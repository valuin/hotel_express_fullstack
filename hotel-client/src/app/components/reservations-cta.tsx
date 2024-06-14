import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteReservation } from '../lib/actions';

export default function ReservationsCTA(reservation: {
  id: number;
  status: string;
}) {
  return (
    <div className="flex gap-2 items-center">
      {reservation.status === 'paid' ? (
        <>
          <button
            disabled
            className="rounded-xl bg-zinc-50 p-2 items-center"
          >
            <PencilIcon className="w-6 text-zinc-300" />
          </button>
          <button
            disabled
            className="rounded-xl bg-zinc-50 p-2 items-center"
          >
            <TrashIcon className="w-6 text-zinc-300" />
          </button>
        </>
      ) : (
        <>
          <Link
            href={`reservations/${reservation.id}/update/`}
            className="rounded-xl bg-zinc-50 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
          >
            <PencilIcon className="w-6 text-zinc-900" />
          </Link>
          <button
            onClick={() => deleteReservation(reservation.id)}
            className="rounded-xl bg-zinc-50 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
          >
            <TrashIcon className="w-6 text-zinc-900" />
          </button>
        </>
      )}
    </div>
  );
}
