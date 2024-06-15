import { useEffect, useState } from 'react';
import { Employees } from '../lib/definitions';

export function useEmployee(id: number): Employees | undefined {
  const [employee, setEmployee] = useState<Employees>();

  useEffect(() => {
    async function fetchEmployee(employeeId: number) {
      try {
        const response = await fetch(
          `http://localhost:3001/employees/${employeeId}`,
          {
            cache: 'no-store',
          }
        );
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmployee(id);
  }, [id]);

  return employee;
}
