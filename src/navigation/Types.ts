declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AuthStackParamList {}
  }
}
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export enum AUTH_PAGES {
  Auth = "Auth",
  WelcomePage = "WelcomePage",
  Fullname = "Fullname",
  Credentials = "Credentials",
  Username = "Username",
  Birthdate = "Birthdate",
  Cooktype = "Cooktype",
  LoggedInWelcomePage = "LoggedInWelcomePage",
}

export type AuthStackParamList = {
  [AUTH_PAGES.WelcomePage]: undefined;
  [AUTH_PAGES.Fullname]: undefined;
  [AUTH_PAGES.Credentials]: undefined;
  [AUTH_PAGES.Username]: undefined;
  [AUTH_PAGES.Birthdate]: undefined;
  [AUTH_PAGES.Cooktype]: undefined;
  [AUTH_PAGES.LoggedInWelcomePage]: undefined;
};

export enum MAIN_PAGES {
  Main = "Main",
  Home = "Home",
}

export type MainStackParamList = {
  [MAIN_PAGES.Home]: undefined;
};
