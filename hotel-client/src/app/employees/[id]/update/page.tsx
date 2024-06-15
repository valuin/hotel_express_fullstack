'use client';

import { useEmployee } from '../../../hooks/useEmployee';
import { useRouter } from 'next/navigation';
import { lusitana } from '../../../lib/fonts';
import { updateEmployee } from '../../../lib/actions';
import Link from 'next/link';

export default function Form({ params }: { params: { id: number } }) {
  const employee = useEmployee(params.id);
  const router = useRouter();

  return (
    <>
      <h1 className={`${lusitana.className} font-bold text-3xl`}>
        Update Employee {params.id}
      </h1>
      <form
        onSubmit={(event) => updateEmployee(event, params.id, router)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={employee?.name}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={employee?.email}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              defaultValue={employee?.phone}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              defaultValue={employee?.address}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              defaultValue={employee?.position}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              defaultValue={employee?.image_url}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/employees">
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
