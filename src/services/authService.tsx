import { axiosInstance } from "@/lib/axiosInstance"

export interface WhoAmIResponse {
  userId: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

export const whoami = async (): Promise<WhoAmIResponse> => {
  const response = await axiosInstance.get("/auth-service/auth/whoami", {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("authToken"),
    },
  })
  return response.data;
}

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post("/auth-service/auth/login", {
    email,
    password,
  })
  return response.data;
}

export const register = async (name: string, role: string, email: string, password: string) => {
  const response = await axiosInstance.post("/auth-service/auth/register", {
    name,
    role,
    email,
    password,
  })
  return response.data;
}
