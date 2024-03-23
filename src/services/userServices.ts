import api from "@src/api/axiosConfig";
import { AuthResult, LoginCredentials, User } from "@src/types/userTypes";
import { AxiosRequestConfig } from "axios";

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

export const getUser = async (token: string): Promise<User> => {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await api.get(`/users/me`, config);

  return data;
};
