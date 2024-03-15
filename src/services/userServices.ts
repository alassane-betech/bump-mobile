import api from "@src/api/axiosConfig";
import { AuthResult, LoginCredentials, User } from "@src/types/userTypes";

export const createUser = async (userData: User): Promise<AuthResult> => {
  const { data } = await api.post(`/auth/signup`, userData);
  return data;
};

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResult> => {
  const { data } = await api.post(`/auth/signin`, credentials);
  return data;
};
