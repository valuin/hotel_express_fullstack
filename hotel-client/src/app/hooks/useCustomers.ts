import { useState, useEffect } from 'react';
import { Customers } from '../lib/definitions';

export function useCustomers(): Customers[] {
  const [customers, setCustomers] = useState<Customers[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('http://localhost:3001/customers', {
          cache: 'no-store',
        });
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCustomers();
  }, []);

  return customers;
}
