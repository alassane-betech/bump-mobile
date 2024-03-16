import { useError } from "@src/context/ErrorContext";
import { ServerError } from "@src/types/ServerResponseTypes";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

function useMutationWithErrorHandling<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  defaultErrorMessage: string
): UseMutationResult<TData, ServerError, TVariables> {
  const { showError } = useError();
  return useMutation<TData, ServerError, TVariables>({
    mutationFn,
    onError: (err: ServerError) => {
      const errMsg = Array.isArray(err.message)
        ? err.message.join(", ")
        : err.message;
      showError(errMsg || defaultErrorMessage);
    },
  });
}
export default useMutationWithErrorHandling;
