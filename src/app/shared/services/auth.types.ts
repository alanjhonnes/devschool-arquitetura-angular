import { User } from '../types/user.type';

export interface BaseLogInResponse {
  success: boolean;
}

export interface LogInSuccessResponse {
  success: true;
  data: User;
}

export interface LogInErrorResponse {
  success: false;
  errors: string[];
}

export type LogInResponse = LogInSuccessResponse | LogInErrorResponse;
