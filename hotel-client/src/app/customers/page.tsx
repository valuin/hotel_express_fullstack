'use client';

import { useCustomers } from '../hooks/useCustomers';
import { lusitana } from '../lib/fonts';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import CustomersTable from '../components/customers-table';

export default function Home() {
  const customers = useCustomers();

  return (
    <>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Customers
        </h1>
        <Link href="customers/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <UserPlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <CustomersTable customersData={customers} />
    </>
  );
}
