import { createContext, useMemo, useReducer, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export interface AuthState {
  isLoading: boolean;
  token: string | null;
}

export type AuthAction =
  | { type: "SET_TOKEN"; token: string }
  | { type: "REMOVE_TOKEN" }
  | { type: "RESTORE_TOKEN"; token: string | null };

export type AuthContextValue = {
  setToken: (token: string) => void;
  removeToken: () => void;
};

export const AuthContext = createContext<{
  state: AuthState;
  authContext: AuthContextValue;
} | null>(null);

export const initialState: AuthState = {
  isLoading: true,
  token: null,
};

export const authReducer = (
  prevState: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
      };
    case "SET_TOKEN":
      return {
        ...prevState,
        token: action.token,
      };
    case "REMOVE_TOKEN":
      return {
        ...prevState,
        token: null,
      };
    default:
      return prevState;
  }
};

export const useAuthContext = (): {
  state: AuthState;
  authContext: AuthContextValue;
} => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const authContext = useMemo(
    () => ({
      setToken: async (token: string) => {
        await SecureStore.setItemAsync("userToken", token);
        dispatch({ type: "SET_TOKEN", token });
      },
      removeToken: async () => {
        await SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "REMOVE_TOKEN" });
      },
    }),
    []
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const token = await SecureStore.getItemAsync("userToken");
        dispatch({ type: "RESTORE_TOKEN", token });
      } catch (error) {}
    };

    bootstrapAsync();
  }, []);

  return { state, authContext };
};
