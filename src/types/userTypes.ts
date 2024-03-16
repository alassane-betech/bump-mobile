export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  username: string;
  category: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResult {
  access_token: string;
  message: string;
}
