import { createContext, useMemo, useReducer, useEffect } from "react";
import { MMKV } from "react-native-mmkv";

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

export const storage = new MMKV();

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
      setToken: (token: string) => {
        storage.set("userToken", token);
        dispatch({ type: "SET_TOKEN", token });
      },
      removeToken: () => {
        storage.delete("userToken");
        dispatch({ type: "REMOVE_TOKEN" });
      },
    }),
    []
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const token = storage.getString("userToken");
        dispatch({ type: "RESTORE_TOKEN", token });
      } catch (error) {}
    };

    bootstrapAsync();
  }, []);

  return { state, authContext };
};
