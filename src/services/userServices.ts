import api from "@src/api/axiosConfig";
import { CreateUserResult, User } from "@src/types/userTypes";

export const createUser = async (userData: User): Promise<CreateUserResult> => {
  const { data } = await api.post(`/auth/signup`, userData);
  return data;
};
