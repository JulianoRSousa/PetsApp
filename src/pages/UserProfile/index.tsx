import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from "react-native";
import * as AppColors from '../../assets/strings/Colors';
import api from "../../services/api";
import PetsHeader from "../../components/PetsHeader";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface Post {

}

interface Pet {

}

interface UserProfileModel {
  username: string | undefined | any;
  firstname: string | undefined | any;
  lastname: string | undefined | any;
  profilePictureUrl: string | undefined | any;
  followerList: string | number | undefined | any;
  postList: string | number | undefined | any;
  petList: string | number | undefined | any;
  followersCount: string | number | undefined | any;
  postsCount: string | number | undefined | any;
  petsCount: string | number | undefined | any;
}


function UserProfile({ route, navigation }) {

  const [userData, setUserData] = useState<UserProfileModel>()
  const { userID } = route.params;

  useEffect(() => {
    loadUser(userID)
  }, [])


  async function loadUser(userID) {
    await await api.get('/getuserbyid', {
      headers: {
        user_id: userID,
      },
    }).then(async Res => {
      setUserData({
        username: Res.data.username,
        firstname: Res.data.firstName,
        lastname: Res.data.lastName,
        profilePictureUrl: Res.data.picture_url,
        followerList: Res.data.followerList,
        postList: Res.data.postList,
        petList: Res.data.petList,
        followersCount: Res.data.followerList.length,
        postsCount: Res.data.postList.length,
        petsCount: Res.data.petList.length,
      })
    })
  }





  function followers() {
    return userData?.followersCount == 1 ? '1 Seguidor' : (userData?.followersCount + ' Seguidores')
  }
  function posts() {
    return userData?.postsCount == 1 ? '1 Post' : (userData?.postsCount + ' Post')
  }

  function pets() {
    return userData?.petsCount == 1 ? '1 Pet' : (userData?.petsCount + ' Pets')
  }

  return (
    <View>
      <PetsHeader/>
      <View style={style.container}>
        <StatusBar backgroundColor={AppColors.base} />
        <View style={style.imageContainer}>
          <View style={style.imageShadow}>
            <View style={style.image}>
              <Image
                style={style.image}
                source={{
                  uri: userData?.profilePictureUrl,
                }}
              />
            </View>
          </View>

        </View>
        <View style={style.infoContainer}>
          <Text style={{ fontFamily: "Chewy", fontSize: 24, color: 'white' }}>{userData?.firstname} {userData?.lastname}</Text>
          <Text style={style.text}>{followers()}</Text>
          <Text style={style.text}>{posts()}</Text>
          <Text style={style.text}>{pets()}</Text>
        </View>
      </View>
    </View>
  )
}

export default UserProfile;

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: AppColors.base,
    minHeight: height * .2365,
    maxHeight: height * .3,
    maxWidth: width,
    flexDirection: 'row',
    elevation: 3

  },
  imageContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageShadow: {
    height: width * .3,
    width: width * .3,
    borderRadius: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 3,
    backgroundColor: AppColors.darkBase,
  },
  image: {
    height: '98.5%',
    width: '99%',
    borderRadius: 30,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "Chewy",
    fontSize: 16,
    color: AppColors.white
  },
})
