import { useState, useEffect } from 'react';
import { Rooms } from '../lib/definitions';

export function useRooms(): Rooms[] {
  const [rooms, setRooms] = useState<Rooms[]>([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch('http://localhost:3001/rooms', {
          cache: 'no-store',
        });
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRooms();
  }, []);

  return rooms;
}
