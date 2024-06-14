'use client';

import { useEmployees } from '../hooks/useEmployees';
import { lusitana } from '../lib/fonts';
import { Button } from '../components/ui/button';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import EmployeesTable from '../components/employees-table';

export default function Page() {
  const employees = useEmployees();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Employees
        </h1>
        <Link href="employees/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <UserPlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <EmployeesTable employeesData={employees} />
    </>
  );
}
