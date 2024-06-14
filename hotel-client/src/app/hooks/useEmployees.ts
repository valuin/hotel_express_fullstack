import { useEffect, useState } from 'react';
import { Employees } from '../lib/definitions';

export function useEmployees(): Employees[] {
  const [employees, setEmployees] = useState<Employees[]>([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch('http://localhost:3001/employees', {
          cache: 'no-store',
        });
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmployees();
  }, []);

  return employees;
}
