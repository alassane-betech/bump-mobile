import { AxiosConfig } from "@src/api/axiosConfig";
import { AuthResult, LoginCredentials, User } from "@src/types/userTypes";

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

  const getUser = async (): Promise<User> => {
    const { data } = await api.get(`/users/me`);

    return data;
  };

  return {
    createUser,
    login,
    validateEmail,
    validateUsername,
    getUser,
  };
};

export default userServices;
