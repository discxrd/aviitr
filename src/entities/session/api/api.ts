import type { LoginRequest, LoginResponse } from "shared/api";
import { apiInstance } from "shared/api/base";

export const login = async ({ email, password }: LoginRequest) => {
  const response = await apiInstance.post("/api/login", { email, password });

  return response.data as LoginResponse;
};
