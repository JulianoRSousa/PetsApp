import api from "./api";

interface Response {
  token: string;
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
  let createAuthPromise;
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
      createAuthPromise = new Promise(resolve => {
        resolve({
          token: Res.data._id,
          auth: Res.data.auth,
          user: {
            id: Res.data.user._id,
            username: Res.data.user.username,
            firstname: Res.data.user.firstName,
            lastname: Res.data.user.lastName,
            male: Res.data.user.male,
            profilePictureUrl: Res.data.user.picture_url,
            followersCount: 188,
            postsCount: 4,
            petsCount: 3,
          },
        });
      });
    },
    );
  return createAuthPromise;
}
