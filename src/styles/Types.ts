export type Theme = {
  primary: string;
  tertiary: string;
  background: {
    input: string;
    card: string;
    button: {
      primary: string;
      secondary: string;
    };
  };
  surface: string;
  text: {
    default: string;
    button: string;
    input: string;
    title: string;
    link: string;
  };
  border: {
    default: string;
  };
  success: {
    color: string;
    background: string;
  };
  error: {
    color: string;
    background: string;
  };
  cardBackground: string;
  layout: {
    backgroundColor: string;
  };
};

export type UpdateUser = {
  username: string;
  description: string;
};
