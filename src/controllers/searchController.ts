import api from "../services/api";

export interface ResultSearch {
    id?: string
    username?: string;
    firstname?: string;
    lastname?: string;
    profilePictureUrl?: string;
}

export async function searchTag(tags): Promise<ResultSearch> {
  let createSearchPromise;
  await api
    .get(
      "/searchFriends",
      {
        headers: {
          tags: tags
        },
      },
    )
    .then(async Res => {
      createSearchPromise = new Promise(resolve => {
        resolve({
            id: Res.data._id,
            username: Res.data.username,
            firstname: Res.data.firstName,
            lastname: Res.data.lastName,
            profilePictureUrl: Res.data.picture_url,
        });
      });
    },
    );
  return createSearchPromise;
}