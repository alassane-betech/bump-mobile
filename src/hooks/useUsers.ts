import { useError } from "@src/context/ErrorContext";
import * as userService from "@src/services/userServices";
import { ServerError } from "@src/types/ServerResponseTypes";
import { AuthResult, LoginCredentials, User } from "@src/types/userTypes";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
  const { showError } = useError();
  return useMutation<AuthResult, ServerError, User>({
    mutationFn: (userData) => userService.createUser(userData),
    onError: ({ message }) => {
      const msg = Array.isArray(message) ? message.join(", ") : message;
      showError(
        msg || "Une erreur est survenue lors de la création de l’utilisateur."
      );
    },
  });
};

export const useLogin = () => {
  const { showError } = useError();
  return useMutation<AuthResult, ServerError, LoginCredentials>({
    mutationFn: (credentials) => userService.login(credentials),
    onError: ({ message }) => {
      const msg = Array.isArray(message) ? message.join(", ") : message;
      showError(
        msg || "Une erreur est survenue lors de la création de l’utilisateur."
      );
    },
  });
};
