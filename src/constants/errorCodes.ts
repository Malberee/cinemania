import { AuthErrorCodes } from "types";

export const errorCodes: Record<AuthErrorCodes, string> = {
  'auth/user-not-found': 'User not found!',
  'auth/wrong-password': 'Wrong password!',
  'auth/too-many-requests': 'Too many tries! Try again later.',
}