export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  username: string;
  category: string;
}

export interface CreateUserResult {
  access_token: string;
  message: string;
}
