import { useState, useEffect } from 'react';
import { Reservations } from '../lib/definitions';

export function useReservation(id: number): Reservations | undefined {
  const [reservation, setReservation] = useState<Reservations>();

  useEffect(() => {
    async function fetchReservation(reservationId: number) {
      try {
        const response = await fetch(`http://localhost:3001/reservations/${reservationId}`, {
          cache: 'no-store',
        });
        const data = await response.json();
        setReservation(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchReservation(id);
  }, [id]);

  return reservation;
}
