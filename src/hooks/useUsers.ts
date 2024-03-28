import * as userService from "@src/services/userServices";
import { AuthResult, QueryKeys, User } from "@src/types/userTypes";
import useMutationWithErrorHandling from "./useMutationWithErrorHandling";
import useQueryHandling from "./useQueryHandling";
import { UpdateUser } from "@src/styles/Types";

export const useCreateUser = () => {
  return useMutationWithErrorHandling<AuthResult, User>(
    userService.createUser,
    "Une erreur est survenue lors de la création de l’utilisateur."
  );
};

export const useLogin = () => {
  return useMutationWithErrorHandling<AuthResult, User>(
    userService.login,
    "Une erreur est survenue lors de l'authentification."
  );
};

export const useValidateEmail = () => {
  return useMutationWithErrorHandling<boolean, string>(
    userService.validateEmail,
    "Une erreur est survenue lors de la validation de l'email"
  );
};

export const useValidateUsername = () => {
  return useMutationWithErrorHandling<boolean, string>(
    userService.validateUsername,
    "Une erreur est survenue lors de la validation du username"
  );
};

export const useUpdateUser = () => {
  return useMutationWithErrorHandling<User, UpdateUser>(
    userService.updateUser,
    "Une erreur est survenue lors de l'édition de l'utilisateur"
  );
};

export const useGetUser = () => {
  return useQueryHandling<User>(userService.getUser, QueryKeys.USER);
};
