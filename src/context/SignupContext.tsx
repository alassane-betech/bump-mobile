import { User } from "@src/types/userTypes";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SignupContextType {
  userInfo: User;
  updateUser: (newInfo: Partial<User>) => void;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface SignupProviderProps {
  children: ReactNode;
}

export const SignupProvider: React.FC<SignupProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<User>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthdate: "",
    username: "",
    category: "",
  });

  const updateUser = (newInfo: Partial<User>) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, ...newInfo }));
  };

  return (
    <SignupContext.Provider value={{ userInfo, updateUser }}>
      {children}
    </SignupContext.Provider>
  );
};
