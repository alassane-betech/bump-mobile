import { User } from "@src/types/userTypes";
import { NewLunchMode } from "@src/components/views/new-lunch/LunchTypeSelect";
import { Media } from "@src/pages/lunch/new-lunch/NewLunch";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        AuthStackParamList,
        PrivateStackParamList {}
  }
}
export type RootStackParamList = {
  Auth: undefined;
  Private: undefined;
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
  Login = "Login",
}

export type AuthStackParamList = {
  [AUTH_PAGES.WelcomePage]: undefined;
  [AUTH_PAGES.Fullname]: undefined;
  [AUTH_PAGES.Credentials]: undefined;
  [AUTH_PAGES.Username]: undefined;
  [AUTH_PAGES.Birthdate]: undefined;
  [AUTH_PAGES.Cooktype]: undefined;
  [AUTH_PAGES.LoggedInWelcomePage]: { token: string };
  [AUTH_PAGES.Login]: undefined;
};

export type PrivateStackParamList = {
  [PRIVATE_PAGES.Main]: undefined;
  [PRIVATE_PAGES.Story]: undefined;
  [PRIVATE_PAGES.NewLunch]: { mode: NewLunchMode };
  [PRIVATE_PAGES.PublishPost]: { media: Media };
};

export enum PRIVATE_PAGES {
  Private = "Private",
  Main = "Main",
  Home = "Home",
  Lunch = "Lunch",
  Duels = "Duels",
  ProfilNav = "ProfilNav",
  Profil = "Profil",
  LeaderBoard = "LeaderBoard",
  Story = "Story",
  EditProfil = "EditProfil",
  NewLunch = "NewLunch",
  PublishPost = "PublishPost",
}

export type MainTabParamList = {
  [PRIVATE_PAGES.Home]: undefined;
  [PRIVATE_PAGES.Lunch]: undefined;
  [PRIVATE_PAGES.Duels]: undefined;
};

export type ProfilStackParamList = {
  [PRIVATE_PAGES.Profil]: undefined;
  [PRIVATE_PAGES.LeaderBoard]: undefined;
  [PRIVATE_PAGES.EditProfil]: {
    username: string;
    profilePicture: string;
    description: string;
  };
};
