export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  username: string;
  category: string;
  totalFollowing?: number;
  totalFollowers?: number;
  points?: number;
  description?: string;
  profilePicture?: string;
  grade?: EGrade;
  tags?: any;
}

export enum EGrade {
  DEFAULT = "DEFAULT",
  APPRENTI = "APPRENTI",
  PEPITE = "PEPITE",
  REGALADE = "REGALADE",
  MASTER = "MASTER",
}
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResult {
  access_token: string;
  message: string;
}
