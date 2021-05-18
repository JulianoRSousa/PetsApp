import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Dimensions, Image, StatusBar } from "react-native";
import * as AppColors from '../assets/Colors';
import { useAuth } from "../contexts/auth";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height * 0.40;


const HeaderInfo: React.FC = () => {

    const [followersCount, setFollowersCount] = useState('');
    const [petsCount, setPetsCount] = useState('0');
    const [postsCount, setPostsCount] = useState('0');
    const { user } = useAuth();

    useEffect(() => {
        followers();
        posts();
        pets();
    }, [])

    function followers() {
        user?.followersCount == 1 ? setFollowersCount('1 Seguidor') : setFollowersCount(user?.followersCount + ' Seguidores')
    }
    function posts() {
        user?.postsCount == 1 ? setPostsCount('1 Post') : setPostsCount(user?.postsCount + ' Post')
    }

    function pets() {
        user?.petsCount == 1 ? setPetsCount('1 Pet') : setPetsCount(user?.petsCount + ' Pets')
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
                                uri: user?.profileUrl,
                            }}
                        />
                    </View>
                </View>

            </View>
            <View style={style.infoContainer}>
                <Text style={{ fontSize: 24, color: 'white' }}>{user?.name}</Text>
                <Text style={style.text}>{followersCount}</Text>
                <Text style={style.text}>{postsCount}</Text>
                <Text style={style.text}>{petsCount}</Text>
            </View>
        </View>
    )
}

export default HeaderInfo;

const style = StyleSheet.create({
    container: {
        alignSelf:'flex-start',
        top:0,
        backgroundColor: AppColors.base,
        height: height,
        width: width,
        flexDirection: 'row',
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
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
        fontFamily: 'Chewy',
        fontSize: 16,
        color: AppColors.white
    },
})