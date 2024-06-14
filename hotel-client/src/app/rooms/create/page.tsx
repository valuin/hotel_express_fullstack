'use client';

import { useRouter } from 'next/navigation';
import { createRoom } from '../../lib/actions';
import Link from 'next/link';

export default function Form() {
  const router = useRouter();

  return (
    <form
      onSubmit={(event) => createRoom(event, router)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
        <div className="flex flex-col gap-1">
          <label htmlFor="number">Room Number</label>
          <input
            type="text"
            name="number"
            placeholder="101"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            placeholder="Single"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="capacity">Capacity</label>
          <input
            type="text"
            name="capacity"
            placeholder="1"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="100"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            defaultValue="Available"
            disabled
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Link href="/rooms">
          <button
            type="button"
            className="border border-zinc-900 px-4 py-2 rounded-lg bg-zinc-50 text-zinc-900 transition ease-in-out hover:bg-zinc-900 hover:text-zinc-100"
          >
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="border px-4 py-2 rounded-lg bg-zinc-900 text-zinc-100 transition ease-in-out hover:bg-zinc-800"
        >
          Add Room
        </button>
      </div>
    </form>
  );
}
