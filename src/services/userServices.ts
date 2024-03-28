import api from "@src/api/axiosConfig";
import { UpdateUser } from "@src/styles/Types";
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

export const getUser = async (): Promise<User> => {
  const { data } = await api.get(`/users/me`);

  return data;
};

export const updateUser = async (body: UpdateUser) => {
  const { data } = await api.put(`/users/me`, body);

  return data;
};
