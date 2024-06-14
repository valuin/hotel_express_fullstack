import { useEffect, useState } from 'react';
import { Employee } from '../lib/definitions';

export function useEmployee(id: number): Employee | undefined {
  const [employee, setEmployee] = useState<Employee>();

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
