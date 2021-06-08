import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import * as AppColors from '../assets/Colors';


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
}

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;


const PetsButton: React.FC<Props> = ({ fontSize, padding, onPress, tittle, height, width, marginBottom, margin, marginRight, marginLeft, marginTop }) => {

    const styleLight = StyleSheet.create({
        
        shadowButton: {
            height: height ? (heightScreen * height) : (heightScreen * 0.083),
            width: width ? (widthScreen * width) : (widthScreen * 0.428),
            margin: margin,
            marginBottom: marginBottom ? marginBottom : 0,
            marginTop: marginTop ? marginTop : 0,
            marginLeft: marginLeft ? marginLeft : 0,
            marginRight: marginRight ? marginRight : 0,
            padding: padding ? padding : 10,
            borderColor:'#DFDB80',
            borderWidth:1,
            backgroundColor: '#F9A862',
            alignItems:'center',
            justifyContent:'center',
        },
        button: {
            backgroundColor: '#0000',
            borderWidth:1,
            borderColor: '#fff',
            height:'100%',
            width:'100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontFamily: 'Quicksand-Bold',
            fontSize: fontSize ? fontSize : 24,
            color: 'white',
            textAlignVertical:'center',
        }
    })
    


    return (
        <TouchableOpacity onPress={onPress} style={styleLight.shadowButton}>
            <View style={styleLight.button}>
                <Text style={styleLight.text}>{tittle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PetsButton;




















