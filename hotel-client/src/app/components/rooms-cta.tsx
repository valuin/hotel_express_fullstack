import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteRooms } from '../lib/actions';

export default function RoomsCTA(room: { id: number }) {
  return (
    <div className="flex gap-2 items-center">
      <Link
        href={`rooms/${room.id}/update/`}
        className="rounded-xl bg-zinc-50 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
      >
        <PencilIcon className="w-6 text-zinc-900" />
      </Link>
      <button
        onClick={() => deleteRooms(room.id)}
        className="rounded-xl bg-zinc-50 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
      >
        <TrashIcon className="w-6 text-zinc-900" />
      </button>
    </div>
  );
}
