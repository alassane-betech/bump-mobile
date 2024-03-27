import { AxiosConfig } from "@src/api/axiosConfig";
import { AuthResult, LoginCredentials, User } from "@src/types/userTypes";
import { AxiosRequestConfig } from "axios";

const userServices = () => {
  const api = AxiosConfig();

  const createUser = async (userData: User): Promise<AuthResult> => {
    const { data } = await api.post(`/auth/signup`, userData);
    return data;
  };

  const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    const { data } = await api.post(`/auth/signin`, credentials);
    return data;
  };

  const validateEmail = async (email: string): Promise<boolean> => {
    const { data } = await api.get(`/users/validate-email?email=${email}`);
    return data;
  };

  const validateUsername = async (username: string): Promise<boolean> => {
    const { data } = await api.get(
      `/users/validate-username?username=${username}`
    );
    return data;
  };

  const getUser = async (token: string): Promise<User> => {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await api.get(`/users/me`, config);

    return data;
  };

  const updateUser = async (body: any) => {
    const { data } = await api.put(`/users/me`, body);

    return data;
  };

  return {
    createUser,
    login,
    validateEmail,
    validateUsername,
    getUser,
    updateUser,
  };
};

export default userServices;
