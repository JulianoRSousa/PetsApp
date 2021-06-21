import React, { useState } from "react";
import {
    View,
    Dimensions,
    KeyboardType,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as AppColors from '../assets/strings/Colors';




interface CustomPiker {
    width?: number,
    height?: number,
    fontSize?: number,
    selectedValue?: string,
    onChangeText?: (text: string) => void;
    placeholder?: string;
    placeholderTextColor?: string;
    editable?: boolean;
    selectionColor?: string;
    onFocus?: () => any;
    onBlur?: () => any;
    underlineColorAndroid?: string;
    style?: any;
    multiline?: boolean;
    numberOfLines?: number;
    value?: string;
    onSubmitEditing?: Promise<void> | undefined | any;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardType;
    defaultValue?: string;
    textColor?: string;
    backgroundColor?: string;
    margin?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    autoCapitalize?: 'none' | 'characters' | 'words' | 'sentences' | undefined
    autoCompleteType?: "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off" | undefined
}

const PetsPicker: React.FC<CustomPiker> = ({ marginVertical, marginHorizontal, margin, style, backgroundColor, textColor, fontSize, width, height, onChangeText, placeholder, placeholderTextColor,
    editable, selectionColor, onFocus, onBlur, underlineColorAndroid, multiline, numberOfLines, selectedValue, onSubmitEditing,
    secureTextEntry, keyboardType, defaultValue, autoCompleteType, autoCapitalize }) => {



    const widthScreen = Dimensions.get("window").width;
    const heightScreen = Dimensions.get("window").height;
    const [value, setValue] = useState(selectedValue ? selectedValue : 'Type a value')

    return (
        <View style={{
            margin: margin ? margin : 0,
            marginHorizontal: marginHorizontal ? marginHorizontal : 0,
            marginVertical: marginVertical ? marginVertical : 0,
            backgroundColor: backgroundColor ? backgroundColor : '#D5702E',
            width: width ? (widthScreen * width) : (widthScreen * 0.7463),
            height: height ? (heightScreen * height) : (heightScreen * 0.0843),
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <View style={{ backgroundColor: AppColors.light }}>
                <Picker
                    mode={"dropdown"}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setValue(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    );
}
export default PetsPicker;
