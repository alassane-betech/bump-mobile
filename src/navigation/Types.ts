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
  Fullname: undefined;
  Credentials: undefined;
  Username: undefined;
  Birthdate: undefined;
  Cooktype: undefined;
};

export enum AUTH_PAGES {
  WelcomePage = "WelcomePage",
  Fullname = "Fullname",
  Credentials = "Credentials",
  Username = "Username",
  Birthdate = "Birthdate",
  Cooktype = "Cooktype",
}
