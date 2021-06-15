import React from "react";
import {View, Text, StyleSheet, Dimensions, Image, StatusBar } from "react-native";
import * as AppColors from '../assets/Colors';
import { useAuth } from "../contexts/auth";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const HeaderInfo: React.FC = () => {

    const { user } = useAuth();

    function followers() {
       return user?.followersCount== 1 ? '1 Seguidor' : (user?.followersCount + ' Seguidores')
    }
    function posts() {
       return user?.postsCount == 1 ? '1 Post' : (user?.postsCount + ' Post')
    }

    function pets() {
      return  user?.petsCount == 1 ? '1 Pet' : (user?.petsCount + ' Pets')
    }

    return (
        <View style={style.container}>
            <StatusBar backgroundColor={AppColors.base} />
            <View style={style.imageContainer}>
                <View style={style.imageShadow}>
                    <View style={style.image}>
                        <Image
                            style={style.image}
                            source={{
                                uri: user?.profilePictureUrl,
                            }}
                        />
                    </View>
                </View>

            </View>
            <View style={style.infoContainer}>
                <Text style={{ fontFamily: "Chewy", fontSize: 24, color: 'white' }}>{user?.firstname} {user?.lastname}</Text>
                <Text style={style.text}>{followers()}</Text>
                <Text style={style.text}>{posts()}</Text>
                <Text style={style.text}>{pets()}</Text>
            </View>
        </View>
    )
}

export default HeaderInfo;

const style = StyleSheet.create({
    container: {
        alignSelf:'flex-start',
        flex:1,
        backgroundColor: AppColors.base,
        minHeight: height*.2365,
        maxHeight: height*.3,
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
