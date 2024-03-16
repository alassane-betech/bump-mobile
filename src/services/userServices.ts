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

export const validateEmail = async (email: string): Promise<boolean> => {
  const { data } = await api.get(`/users/validate-email?email=${email}`);
  return data;
};

export const validateUsername = async (username: string): Promise<boolean> => {
  const { data } = await api.get(
    `/users/validate-username?username=${username}`
  );
  return data;
};
