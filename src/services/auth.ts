interface Response {
  token: string;
  user: {
    name: string,
    followersCount: number,
    postsCount: number,
    petsCount: number,
    profileUrl: string,
    email: string,
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
      resolve({
        token: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
        user: {
          name: "Juliano Sousa",
          followersCount: 188,
          postsCount: 4,
          petsCount: 3,
          profileUrl: "https://instagram.fops3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/36881347_1935755429788399_2068657335827431424_n.jpg?tp=1&_nc_ht=instagram.fops3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=05FRBJcrRqsAX93mg2N&edm=AABBvjUBAAAA&ccb=7-4&oh=fdf1a132edd29ddb8e8b62d56c4f64b8&oe=60CB3F63&_nc_sid=83d603",
          email: "juliano.sousa@unemat.br",
        },
      });
  });
}