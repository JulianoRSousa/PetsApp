interface Response {
  token: string;
  user: {
    name: string,
    followersCount: number,
    postsCount: number,
    petsCount: number
    profileUrl: string
    email: string,
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
      resolve({
        token: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
        user: {
          name: "Thiago",
          followersCount: 188,
          postsCount: 4,
          petsCount: 3,
          profileUrl: "https://pbs.twimg.com/profile_images/1303113974343446530/IcXAUCDJ.jpg",
          email: "https://pbs.twimg.com/profile_images/1303113974343446530/IcXAUCDJ.jpg",
        },
      });
  });
}