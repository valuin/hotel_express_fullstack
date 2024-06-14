'use client';

import { useRouter } from 'next/navigation';
import { createReservation } from '../../lib/actions';
import Link from 'next/link';

export default function Form() {
  const router = useRouter();

  return (
    <form
      onSubmit={(event) => createReservation(event, router)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
        <div className="flex flex-col gap-1">
          <label htmlFor="customer_id">Customer ID</label>
          <input
            type="text"
            name="customer_id"
            placeholder="1301"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="room_id">Room ID</label>
          <input
            type="text"
            name="room_id"
            placeholder="1201"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="check_in">Check-In Date</label>
          <input
            type="text"
            name="check_in"
            placeholder="2024-06-01"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="check_out">Check-Out Date</label>
          <input
            type="text"
            name="check_out"
            placeholder="2024-06-04"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            placeholder="paid || pending"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Link href="/reservations">
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
          Add Reservation
        </button>
      </div>
    </form>
  );
}
