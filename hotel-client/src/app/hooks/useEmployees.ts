import { useEffect, useState } from 'react';
import { Employee } from '../lib/definitions';

export function useEmployees(): Employee[] {
  const [employees, setEmployees] = useState<Employee[]>([]);

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
