// /services/auth.ts
import { apiClient } from "@/lib/apiClient";

export type LoginResponse = {
  message?: string;
  redirect?: string;
  type?: string;
  accessToken?: string;
  refreshToken?: string;
};

export const AuthService = {
  register: (email: string, password: string) =>
    apiClient<{ message?: string }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  login: (email: string, password: string) =>
    apiClient<LoginResponse>("/auth/login", {
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
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};
