import { apiClient } from "@/lib/apiClient";

export const AuthService = {
  register: (email: string, password: string) =>
    apiClient<{ message?: string }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  login: (email: string, password: string) =>
    apiClient<{ accessToken: string }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  getMe: () =>
    apiClient<{
      firstName: string;
      lastName: string;
      phoneCode: string;
      phoneNumber: string;
      city: string;
      address: string;
      profilePicture: string;
    }>("/user/me", {
      method: "GET",
    }),

  updateMe: (data: {
    firstName?: string;
    lastName?: string;
    phoneCode?: string;
    phoneNumber?: string;
    city?: string;
    address?: string;
  }) =>
    apiClient<{ message?: string }>("/user/me", {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};
