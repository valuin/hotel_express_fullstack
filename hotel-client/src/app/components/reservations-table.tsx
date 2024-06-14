import { Reservations } from '../lib/definitions';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table';
import { Badge } from './ui/badge';
import ReservationsCTA from './reservations-cta';

export default function ReservationsTable({
  reservationsData,
}: {
  reservationsData: Reservations[];
}) {
  const reservations = reservationsData;

  return (
    <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer ID</TableHead>
            <TableHead>Room ID</TableHead>
            <TableHead>Check-In</TableHead>
            <TableHead>Check-Out</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations?.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell>{reservation.id}</TableCell>
              <TableCell>{reservation.customer_id}</TableCell>
              <TableCell>{reservation.room_id}</TableCell>
              <TableCell>
                {new Date(reservation.check_in).toISOString().split('T')[0]}
              </TableCell>
              <TableCell>
                {new Date(reservation.check_out).toISOString().split('T')[0]}
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
              <TableCell className="flex justify-center">
                <ReservationsCTA
                  id={reservation.id}
                  status={reservation.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
