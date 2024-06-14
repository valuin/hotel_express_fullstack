import { useState, useEffect } from 'react';
import { formatCurrency } from '../lib/utils';

export function useRevenue(): string {
  const [revenue, setRevenue] = useState<number>();

  useEffect(() => {
    async function fetchRevenue() {
      try {
        const response = await fetch('http://localhost:3001/revenue', {
          cache: 'no-store',
        });
        const data = await response.json();
        setRevenue(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRevenue();
  }, []);

  return revenue !== undefined ? formatCurrency(revenue) : '';
}
