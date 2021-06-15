import { AxiosResponse } from "axios";
import api from "../services/api";

// interface CreateLoginResponse {
//   token: string;
//   user?: {
//     id?: string;
//     email?: string;
//     username?: string;
//     firstname?: string;
//     lastname?: string;
//     birthdate?: string;
//     profilePictureUrl?: string;
//     followersCount?: number;
//     postsCount?: number;
//     petsCount?: number;
//   };
//   createdAt: string;
//   auth: boolean;
// }

export default async function signUp(
  email,
  fullname,
  birthdate,
  pass,
): Promise <AxiosResponse<any>> {
  const createLogin = await api.post(
    "/createLogin",
    {},
    {
      headers: {
        email: email,
        fullname: fullname,
        birthDate: birthdate,
        pass: pass,
      },
    },
  );
  return createLogin;
}
