'use client';

import { useCustomer } from '../../../hooks/useCustomer';
import { useRouter } from 'next/navigation';
import { lusitana } from '../../../lib/fonts';
import { updateCustomer } from '../../../lib/actions';
import Link from 'next/link';

export default function Form({ params }: { params: { id: number } }) {
  const customer = useCustomer(params.id);
  const router = useRouter();

  return (
    <>
      <h1 className={`${lusitana.className} font-bold text-3xl`}>
        Update Customer {params.id}
      </h1>
      <form
        onSubmit={(event) => updateCustomer(event, params.id, router)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={customer?.name}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              defaultValue={customer?.email}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={customer?.phone}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address">address</label>
            <input
              type="text"
              name="address"
              defaultValue={customer?.address}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/customers">
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
