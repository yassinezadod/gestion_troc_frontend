"use client";

import { useEffect, useState } from "react";

// Définir le type exact de l'utilisateur
interface User {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneCode?: string | null;
  phoneNumber?: number | null;
  city?: string | null;
  address?: string | null;
  profilePicture?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export default function TestCORS() {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8081/api/user/all")
      .then(res => res.json())
      .then((users: User[]) => setData(users))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Test CORS</h1>
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
