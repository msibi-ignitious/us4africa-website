const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

export interface AdminUser {
  id: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  tokenType: string;
  expiresIn: string;
  admin: AdminUser;
}

export async function loginAdmin(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to sign in.");
  }

  return data as LoginResponse;
}