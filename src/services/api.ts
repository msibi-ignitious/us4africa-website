const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = sessionStorage.getItem("us4africa_admin_token");

  if (!token) {
    sessionStorage.removeItem("us4africa_admin");
    window.location.hash = "#/admin/login";
    throw new Error("Your session has expired. Please sign in again.");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    sessionStorage.removeItem("us4africa_admin_token");
    sessionStorage.removeItem("us4africa_admin");
    window.location.hash = "#/admin/login";

    throw new Error("Your session has expired. Please sign in again.");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong.");
  }

  return data as T;
}