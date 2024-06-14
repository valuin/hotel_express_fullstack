import { useState, useEffect } from 'react';
import { Reservations } from '../lib/definitions';

export function useRecentReservations(): Reservations[] {
  const [recents, setRecents] = useState<Reservations[]>([]);

  useEffect(() => {
    async function fetchRecents() {
      try {
        const response = await fetch('http://localhost:3001/recent-reservations', {
          cache: 'no-store',
        });
        const data = await response.json();
        setRecents(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecents();
  }, []);

  return recents;
}
