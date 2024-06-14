import { useState, useEffect } from 'react';
import { Customers } from '../lib/definitions';

export function useCustomer(id: number): Customers | undefined {
  const [customer, setCustomer] = useState<Customers>();

  useEffect(() => {
    async function fetchCustomer(customerId: number) {
      try {
        const response = await fetch(
          `http://localhost:3001/customers/${customerId}`,
          {
            cache: 'no-store',
          }
        );
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCustomer(id);
  }, [id]);

  return customer;
}
