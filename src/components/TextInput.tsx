import React, {
    MutableRefObject
} from "react";
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
    ref?: MutableRefObject<any> | null;
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

const PetsTextInput: React.FC<CustomInput> = ({ title, ref, onChangeText, placeholder, placeholderTextColor,
    editable, selectionColor, onFocus, onBlur, underlineColorAndroid, multiline, numberOfLines, value, onSubmitEditing,
    secureTextEntry, keyboardType, defaultValue, autoCompleteType }) => {

    const width = Dimensions.get("window").width * 0.8;
    const height = Dimensions.get("window").height * 0.07;
    const internalRef = ref
    return (
        <View
            style={{
                backgroundColor: AppColors.white,
                borderRadius: 30,
                width: width,
                marginVertical: 10,
                elevation: 5,
            }}
        >
            <Text
                style={{
                    backgroundColor: AppColors.white,
                    borderRadius: 30,
                    fontFamily: "Chewy",
                    color: AppColors.base,
                    position: "absolute",
                    left: width / 8,
                    top: -(height / 6),
                    paddingHorizontal: 5,
                    fontSize: 16,
                }}
            >
                {title}
            </Text>
            <TextInput
                ref={internalRef}
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
                    borderRadius: 30,
                    marginHorizontal: width / 10,
                    color: AppColors.base,
                }}

            ></TextInput>
        </View>
    );
}
export default PetsTextInput;
