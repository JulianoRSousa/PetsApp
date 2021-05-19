import React from "react";
import {
    View,
    Text,
    TextInput,
    Dimensions,
    KeyboardType
} from "react-native";
import * as AppColors from '../assets/Colors';

interface CustomInput {
    title?: string,
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
    onSubmitEditing?: () => void;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardType;
    defaultValue?: string;
    autoCompleteType?: "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off" | undefined
}

const PetsTextInput: React.FC<CustomInput> = ({ title, onChangeText, placeholder, placeholderTextColor,
    editable, selectionColor, onFocus, onBlur, underlineColorAndroid, multiline, numberOfLines, value, onSubmitEditing,
    secureTextEntry, keyboardType, defaultValue, autoCompleteType }) => {

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;
    
    return (
        <View
            style={{
                backgroundColor: AppColors.white,
                borderTopLeftRadius:0,
                borderRadius: 30,
                width: width * 0.72,
                height: height  * 0.07,
                marginBottom: height * 0.045,
                elevation: 5,
            }}
        >
             <Text
                style={{
                    backgroundColor:'blue',
                    borderRadius: 30,
                    fontFamily: "Chewy",
                    color: AppColors.base,
                    paddingHorizontal: 5,
                    fontSize: 16,
                }}
            >
                {title}
            </Text>
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                editable={editable}
                selectionColor={selectionColor}
                onFocus={onFocus}
                onBlur={onBlur}
                underlineColorAndroid={underlineColorAndroid}
                multiline={multiline}
                numberOfLines={numberOfLines}
                value={value}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                defaultValue={defaultValue}
                autoCompleteType={autoCompleteType}
                style={{
                    backgroundColor:'red',
                    borderRadius: 30,
                    marginHorizontal: width / 10,
                    color: AppColors.base,
                }}

            ></TextInput> 
            {/**/}
        </View>
    );
}
export default PetsTextInput;
