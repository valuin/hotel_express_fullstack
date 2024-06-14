import { Employees } from '../lib/definitions';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table';
import Image from 'next/image';
import EmployeesCTA from './employees-cta';

export default function EmployeesTable({
  employeesData,
}: {
  employeesData: Employees[];
}) {
  const employees = employeesData;

  return (
    <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Position</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees?.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell className="flex gap-4 items-center">
                <Image
                  src={employee.image_url}
                  alt={`${employee.name} profile image`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover w-[50px] h-[50px]"
                />
                <span>{employee.name}</span>
              </TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.address}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell className="flex justify-center">
                <EmployeesCTA id={employee.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
