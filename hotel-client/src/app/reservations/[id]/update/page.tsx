'use client';

import { useCustomer } from '../../../hooks/useCustomer';
import { useRouter } from 'next/navigation';
import { lusitana } from '../../../lib/fonts';
import { useReservation } from '../../../hooks/useReservation';
import { updateReservation } from '../../../lib/actions';
import Link from 'next/link';

export default function Form({ params }: { params: { id: number } }) {
  const reservation = useReservation(params.id);
  const router = useRouter();

  return (
    <>
      <h1 className={`${lusitana.className} font-bold text-3xl`}>
        Update Reservation {params.id}
      </h1>
      <form
        onSubmit={(event) => updateReservation(event, params.id, router)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="status">Status</label>
            <select
              className="appearance-none p-2 rounded-lg border border-zinc-900 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              name="status"
            >
              {reservation?.status === 'pending' && (
                <>
                  <option value="pending">🟡 Pending</option>
                  <option value="paid">🟢 Paid</option>
                </>
              )}
            </select>
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
            Save
          </button>
        </div>
      </form>
    </>
  );
}
