// /lib/apiClient.ts
export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api"; // 👈 adjust if needed
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const headers = new Headers(options.headers || {});
  headers.set("Content-Type", "application/json");

  // ✅ Add Bearer token if available
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
  });

  // 🧩 Handle unauthorized cases globally
  if (response.status === 401 || response.status === 403) {
    console.warn(
      "Unauthorized or forbidden request — token missing or invalid"
    );
    // Optionally clear tokens here or redirect to login
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
