import { FormEvent } from 'react';

export async function createEmployee(
  event: FormEvent<HTMLFormElement>,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3001/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to create employee');
    }

    router.push('/employees');
  } catch (error) {
    console.error(error);
  }
}

export async function updateEmployee(
  event: FormEvent<HTMLFormElement>,
  id: number,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to update employee');
    }

    router.push('/employees');
  } catch (error) {
    console.error(error);
  }
}

export async function deleteEmployee(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

export async function createCustomer(
  event: FormEvent<HTMLFormElement>,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to create customer');
    }

    router.push('/customers');
  } catch (error) {
    console.error(error);
  }
}

export async function updateCustomer(
  event: FormEvent<HTMLFormElement>,
  id: number,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`http://localhost:3001/customers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to update customer');
    }

    router.push('/customers');
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCustomer(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/customers/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete customer');
    }

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

export async function createRoom(
  event: FormEvent<HTMLFormElement>,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3001/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to create room');
    }

    router.push('/rooms');
  } catch (error) {
    console.error(error);
  }
}

export async function updateRoom(
  event: FormEvent<HTMLFormElement>,
  id: number,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`http://localhost:3001/rooms/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to update room');
    }

    router.push('/rooms');
  } catch (error) {
    console.error(error);
  }
}

export async function deleteRooms(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/rooms/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete room');
    }
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

export async function createReservation(
  event: FormEvent<HTMLFormElement>,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3001/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to create reservation');
    }

    router.push('/reservations');
  } catch (error) {
    console.error(error);
  }
}

export async function updateReservation(
  event: FormEvent<HTMLFormElement>,
  id: number,
  router: any
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formJSON = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`http://localhost:3001/reservations/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJSON),
    });

    if (!response.ok) {
      throw new Error('Failed to update reservation');
    }

    router.push('/reservations');
  } catch (error) {
    console.error(error);
  }
}

export async function deleteReservation(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/reservations/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete reservation');
    }

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}
