import React, {MutableRefObject, useRef
} from "react";
import {
    View,
    Text,
    TextInput,
    Dimensions,
    TextInputComponent
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
}

const PetsTextInput: React.FC<CustomInput> = ({ title, onChangeText, placeholder, placeholderTextColor,
    editable, selectionColor, onFocus, onBlur, underlineColorAndroid, multiline, numberOfLines, value, onSubmitEditing, secureTextEntry }) => {

    const width = Dimensions.get("window").width * 0.8;
    const height = Dimensions.get("window").height * 0.07;
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
