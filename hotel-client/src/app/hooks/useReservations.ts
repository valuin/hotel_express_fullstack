import { useState, useEffect } from 'react';
import { Reservations } from '../lib/definitions';

export function useReservations(): Reservations[] {
  const [reservartions, setReservations] = useState<Reservations[]>([]);

  useEffect(() => {
    async function fetchRevenue() {
      try {
        const response = await fetch('http://localhost:3001/reservations', {
          cache: 'no-store',
        });
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRevenue();
  }, []);

  return reservartions;
}
