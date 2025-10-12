import fetch from "node-fetch";

const BASE_URL = "http://localhost:8081/api";

interface UserResponse {
  id: string;
  email: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
}

describe("Test API Spring Boot - Auth Flow", () => {
  let email: string;
  let accessToken: string;

  it("✅ Register user", async () => {
    email = `user${Date.now()}@example.com`;
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password: "test123456",
      }),
    });

    expect([200, 201]).toContain(response.status);

    const dataUnknown: unknown = await response.json();
    if (typeof dataUnknown !== "object" || dataUnknown === null) {
      throw new Error("Réponse inattendue de l'API");
    }

    const data = dataUnknown as UserResponse;
    expect(data).toHaveProperty("email", email);
    console.log("Utilisateur enregistré :", data);
  });

  it("✅ Login user", async () => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password: "test123456",
      }),
    });

    expect([200, 201]).toContain(response.status);

    const dataUnknown: unknown = await response.json();
    if (typeof dataUnknown !== "object" || dataUnknown === null) {
      throw new Error("Réponse inattendue de l'API");
    }

    const data = dataUnknown as LoginResponse;
    expect(data).toHaveProperty("accessToken");

    accessToken = data.accessToken;
    console.log("Login réussi :", data);
  });

  it("✅ Get /user/me with accessToken", async () => {
    const response = await fetch(`${BASE_URL}/user/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    expect([200, 201]).toContain(response.status);

    const dataUnknown: unknown = await response.json();
    if (typeof dataUnknown !== "object" || dataUnknown === null) {
      throw new Error("Réponse inattendue de l'API");
    }

    const data = dataUnknown as UserResponse;
    expect(data).toHaveProperty("email", email);

    console.log("Données de l'utilisateur connecté :", data);
  });
});
