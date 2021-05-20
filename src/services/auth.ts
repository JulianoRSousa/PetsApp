import api from "./api";

interface Response {
  token: string | null;
  auth: boolean;
  user?: {
    id?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    male: boolean | null;
    profilePictureUrl?: string;
    followersCount?: number;
    postsCount?: number;
    petsCount?: number;
  };
}

export async function signIn(username, pass): Promise<Response> {
 
    await api
      .post(
        "/createauth",
        {},
        {
          headers: {
            username: username,
            pass: pass,
          },
        },
      )
      .then(async Res => {
        return new Promise(resolve => {
          resolve({
            token: Res.data._id,
            auth: Res.data.auth,
            user: {
              id: Res.data.user._id,
              username: Res.data.user.username,
              firstname: Res.data.user.firstname,
              lastname: Res.data.user.lastname,
              male: Res.data.user.male,
              profilePictureUrl: Res.data.user.picture_url,
            },
          });
        });
      });
}
