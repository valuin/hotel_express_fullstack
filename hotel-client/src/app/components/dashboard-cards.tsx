'use client';

import { lusitana } from '../lib/fonts';
import { useRevenue } from '../hooks/useRevenue';
import { useCustomers } from '../hooks/useCustomers';
import { useReservations } from '../hooks/useReservations';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '../components/ui/card';
import {
  BanknotesIcon,
  UserGroupIcon,
  HomeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useRooms } from '../hooks/useRooms';

export default function DashboardCards() {
  const revenue = useRevenue();
  const customers = useCustomers();
  const rooms = useRooms();
  const reservations = useReservations();

  const availableRooms = rooms?.filter((room) => room.status === 'Available');
  const occupiedRooms = rooms?.filter((room) => room.status === 'Occupied');
  const pendingReservations = reservations?.filter(
    (reservations) => reservations.status === 'pending'
  );

  return (
    <div className="flex justify-start gap-4">
      <Card>
        <CardHeader className="gap-2">
          <CardDescription>Total Revenue This Month</CardDescription>
          <CardTitle
            className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
          >
            <BanknotesIcon className="w-6 h-6" />
            {revenue}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="gap-2">
          <CardDescription>Total Customers This Month</CardDescription>
          <CardTitle
            className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
          >
            <UserGroupIcon className="w-6 h-6" />
            {customers.length}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="gap-2">
          <CardDescription>Rooms Available</CardDescription>
          <CardTitle
            className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
          >
            <HomeIcon className="w-6 h-6" />
            <span>{availableRooms.length}</span>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="gap-2">
          <CardDescription>Rooms Occupied</CardDescription>
          <CardTitle
            className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
          >
            <HomeIcon className="w-6 h-6" />
            <span>{occupiedRooms.length}</span>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="gap-2">
          <CardDescription>Payment Due</CardDescription>
          <CardTitle
            className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
          >
            <ClockIcon className="w-6 h-6" />
            <span>{pendingReservations.length}</span>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
