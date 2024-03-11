import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  username: string;
  userType: string;
}

interface SignupContextType {
  userInfo: UserInfo;
  updateUser: (newInfo: Partial<UserInfo>) => void;
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
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthdate: "",
    username: "",
    userType: "",
  });

  const updateUser = (newInfo: Partial<UserInfo>) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, ...newInfo }));
  };

  return (
    <SignupContext.Provider value={{ userInfo, updateUser }}>
      {children}
    </SignupContext.Provider>
  );
};
