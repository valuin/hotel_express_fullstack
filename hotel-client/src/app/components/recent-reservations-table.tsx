'use client';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table';
import { useRecentReservations } from '../hooks/useRecentReservations';
import { useCustomers } from '../hooks/useCustomers';
import { useRooms } from '../hooks/useRooms';
import { Badge } from './ui/badge';

export default function RecentReservations() {
  const reservations = useRecentReservations();
  const customers = useCustomers();
  const rooms = useRooms();

  return (
    <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Check-In Date</TableHead>
            <TableHead>Days Remaining</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations?.map((reservation) => {
            return (
              <TableRow key={reservation.id}>
                <TableCell>
                  {
                    customers.find(
                      (customer) => customer.id === reservation.customer_id
                    )?.name
                  }
                </TableCell>
                <TableCell>
                  {
                    rooms.find((room) => room.id === reservation.room_id)
                      ?.number
                  }
                </TableCell>
                <TableCell>
                  {new Date(reservation.check_in).toISOString().split('T')[0]}
                </TableCell>
                <TableCell>
                  {reservation.days_remaining === 0 ? (
                    <Badge className="bg-zinc-900 hover:bg-zinc-700">
                      Checked Out
                    </Badge>
                  ) : (
                    reservation.days_remaining
                  )}
                </TableCell>
                <TableCell>
                  {reservation.status === 'paid' ? (
                    <Badge className="bg-green-500 hover:bg-green-400">
                      Paid
                    </Badge>
                  ) : (
                    <Badge className="bg-yellow-400 hover:bg-yellow-300">
                      Pending
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
