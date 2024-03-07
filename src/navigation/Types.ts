declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AuthStackParamList {}
  }
}
export type RootStackParamList = {
  Auth: undefined;
};

export type AuthStackParamList = {
  WelcomePage: undefined;
  Name: undefined;
};
