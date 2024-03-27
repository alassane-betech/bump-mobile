import { AuthResult, User } from "@src/types/userTypes";
import userServices from "@src/services/userServices";
import useMutationWithErrorHandling from "./useMutationWithErrorHandling";
import useQueryHandling from "./useQueryHandling";

const useUsers = () => {
  const { createUser, login, validateEmail, validateUsername, getUser } =
    userServices();

  const useCreateUser = () => {
    return useMutationWithErrorHandling<AuthResult, User>(
      createUser,
      "Une erreur est survenue lors de la création de l’utilisateur."
    );
  };

  const useLogin = () => {
    return useMutationWithErrorHandling<AuthResult, User>(
      login,
      "Une erreur est survenue lors de l'authentification."
    );
  };

  const useValidateEmail = () => {
    return useMutationWithErrorHandling<boolean, string>(
      validateEmail,
      "Une erreur est survenue lors de la validation de l'email"
    );
  };

  const useValidateUsername = () => {
    return useMutationWithErrorHandling<boolean, string>(
      validateUsername,
      "Une erreur est survenue lors de la validation du username"
    );
  };

  const useGetUser = () => {
    return useQueryHandling<User>(getUser, "user");
  };

  return {
    useCreateUser,
    useLogin,
    useValidateEmail,
    useValidateUsername,
    useGetUser,
  };
};

export default useUsers;
