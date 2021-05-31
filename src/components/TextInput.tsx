import React, { LegacyRef, MutableRefObject, useRef, useImperativeHandle, forwardRef, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Dimensions,
    KeyboardType,
    ViewProps,
    Button,
    ButtonProps,
    TextInputProps,
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
    onSubmitEditing?: Promise<void> | undefined | any;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardType;
    defaultValue?: string;
    autoCapitalize?: 'none' | 'characters' | 'words' | 'sentences' | undefined
    autoCompleteType?: "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off" | undefined
}

const PetsTextInput: React.FC<CustomInput> = ({title, onChangeText, placeholder, placeholderTextColor,
    editable, selectionColor, onFocus, onBlur, underlineColorAndroid, multiline, numberOfLines, value, onSubmitEditing,
    secureTextEntry, keyboardType, defaultValue, autoCompleteType, autoCapitalize }) => {

  

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    return (
        <View
            style={{
                backgroundColor: AppColors.white,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderRadius: 30,
                width: width * 0.72,
                height: height * 0.07,
                marginBottom: height * 0.045,
                elevation: 5,
            }}
        >
            <Text
                style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRadius: 10,
                    fontFamily: "Chewy",
                    color: AppColors.base,
                    paddingHorizontal: 5,
                    fontSize: 16,
                    marginTop: -10,
                    backgroundColor: AppColors.white,
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
                autoCapitalize={autoCapitalize}
                style={{
                    borderRadius: 30,
                    marginHorizontal: width / 12,
                    marginTop: -15,
                    color: AppColors.base,
                }}

            ></TextInput>
            {/**/}
        </View>
    );
}
export default PetsTextInput;
