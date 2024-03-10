export type Theme = {
  primary: string;
  background: {
    input: string;
    card: string;
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
};
