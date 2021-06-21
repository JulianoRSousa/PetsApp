import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import Lottie from 'lottie-react-native';
import { useAuth } from "../contexts/auth";
import * as AppFonts from '../assets/strings/Fonts';
import * as AppColors from '../assets/strings/Colors';


interface Props {
    tittle: string;
    onPress: Promise<void> | undefined | any;
    width?: number;
    height?: number;
    fontSize?: number;
    margin?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
    padding?: number;
    isLoading?: boolean
}

const widthScreen = Dimensions.get("window").width;
const rem = (Dimensions.get("window").width) / 380
const heightScreen = Dimensions.get("window").height;


const PetsButton: React.FC<Props> = ({ isLoading, fontSize, padding, onPress, tittle, height, width, marginBottom, margin, marginRight, marginLeft, marginTop }) => {


    const styleLight = StyleSheet.create({

        shadowButton: {
            height: height ? (heightScreen * height) : (heightScreen * 0.083),
            width: width ? (widthScreen * width) : (widthScreen * 0.428),
            margin: margin,
            marginBottom: marginBottom ? marginBottom : 0,
            marginTop: marginTop ? marginTop : 0,
            marginLeft: marginLeft ? marginLeft : 0,
            marginRight: marginRight ? marginRight : 0,
            padding: padding ? padding : 10 * rem,
            backgroundColor: '#F9A862',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15 * rem,
            elevation: 8,
            shadowColor: AppColors.blackColor,
        },
        button: {
            backgroundColor: AppColors.transparent,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontFamily: AppFonts.mainFontBold,
            fontSize: fontSize ? fontSize : 24 * rem,
            color: 'white',
            textAlignVertical: 'center',
            alignSelf: 'center',
        }
    })



    return (
        <TouchableOpacity onPress={onPress} style={styleLight.shadowButton}>
            <View style={styleLight.button}>
                {isLoading ?
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={styleLight.text}>{tittle}</Text>
                        <View style={{ width: 40, height: 20, alignSelf: 'flex-end' }}>
                            <Lottie source={require('../assets/animations/loadingButton.json')}
                                autoPlay={true}
                                loop={true}
                            />
                        </View>
                    </View>
                    :
                    <Text style={styleLight.text}>{tittle}</Text>

                }
            </View>
        </TouchableOpacity>
    )
}

export default PetsButton;




















