import { Rooms } from '../lib/definitions';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table';
import { formatCurrency } from '../lib/utils';
import { Badge } from './ui/badge';
import RoomsCTA from './rooms-cta';

export default function RoomsTable({ roomData }: { roomData: Rooms[] }) {
  const rooms = roomData;

  return (
    <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms?.map((room) => (
            <TableRow key={room.id}>
              <TableCell>{room.id}</TableCell>
              <TableCell>{room.number}</TableCell>
              <TableCell>{room.type}</TableCell>
              <TableCell>{room.capacity}</TableCell>
              <TableCell>{formatCurrency(room.price)}</TableCell>
              <TableCell>
                {room.status === 'Available' ? (
                  <Badge className="bg-green-500 hover:bg-green-400">
                    {room.status}
                  </Badge>
                ) : (
                  <Badge variant="destructive">{room.status}</Badge>
                )}
              </TableCell>
              <TableCell className="flex justify-center">
                <RoomsCTA id={room.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
