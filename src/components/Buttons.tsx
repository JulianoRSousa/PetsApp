import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import * as AppColors from '../assets/Colors';

interface Props {
    readonly color: 'blue' | 'light' | 'orange';
    readonly tittle: string;
    onPress: any;
}
const width = Dimensions.get("window").width * 0.45;
const height = Dimensions.get("window").height * 0.07;

const PetsButton: React.FC<Props> = ({ onPress, color, tittle }) => {


    const [styleSelected, setStyleSelected] = useState(styleLight);

    useEffect(() => {
        selectColor();
    })

    function selectColor() {
        if (String(color) == 'blue') {
            setStyleSelected(styleBlue)
        } else if (String(color) == 'light') {
            setStyleSelected(styleLight)
        } else if (String(color) == 'orange') {
            setStyleSelected(styleOrange)
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={styleSelected.shadowButton}>
            <View style={styleSelected.button}>
                <Text style={styleSelected.text}>{tittle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PetsButton;


const styleBlue = StyleSheet.create({
    button: {
        backgroundColor: AppColors.mediumBlue,
        height: '95%',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowButton: {
        height: height,
        width: width,
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: AppColors.darkBlue,
    },
    text: {
        fontFamily: 'Chewy',
        fontSize: 18,
        color: AppColors.white
    }
})

const styleLight = StyleSheet.create({
    button: {
        backgroundColor: AppColors.light,
        height: '95%',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowButton: {
        height: height,
        width: width,
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: AppColors.darkLight,
    },
    text: {
        fontFamily: 'Chewy',
        fontSize: 18,
        color: AppColors.base
    }
})

const styleOrange = StyleSheet.create({
    button: {
        backgroundColor: AppColors.base,
        height: '95%',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowButton: {
        height: height,
        width: width,
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: AppColors.darkBase,
    },
    text: {
        fontFamily: 'Chewy',
        fontSize: 18,
        color: AppColors.light
    }
})
