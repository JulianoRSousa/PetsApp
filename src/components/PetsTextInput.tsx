import React from "react";
import {
    View,
    TextInput,
    Dimensions,
    KeyboardType,
} from "react-native";



interface CustomInput {
    width?: number,
    height?: number,
    fontSize?: number,
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
    fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'normal' 
    autoCapitalize?: 'none' | 'characters' | 'words' | 'sentences' | undefined
    autoCompleteType?: "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off" | undefined
}

const PetsTextInput: React.FC<CustomInput> = ({fontWeight, marginVertical, marginHorizontal, margin, style, backgroundColor, textColor ,fontSize, width, height, onChangeText, placeholder, placeholderTextColor,
    editable, selectionColor, onFocus, onBlur, underlineColorAndroid, multiline, numberOfLines, value, onSubmitEditing,
    secureTextEntry, keyboardType, defaultValue, autoCompleteType, autoCapitalize }) => {

  

    const widthScreen = Dimensions.get("window").width;
    const heightScreen = Dimensions.get("window").height;

    return (
        <View
            style={{
                margin: margin ? margin : 0,
                marginHorizontal : marginHorizontal ? marginHorizontal : 0,
                marginVertical: marginVertical ? marginVertical : 0,
                backgroundColor: backgroundColor ? backgroundColor : '#D5702E',
                width: width ? (widthScreen * width ) : (widthScreen * 0.7463) ,
                height: height ? ( heightScreen * height ) : (heightScreen * 0.0843),
                elevation: 6,
                alignContent:'center',
                justifyContent:'center',
                borderRadius:10,
            }}
        >
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#808080'}
                editable={editable}
                selectionColor={selectionColor ? selectionColor : '#D5702E'}
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
                style={style ? style : {
                    backgroundColor:'white',
                    color: textColor ? textColor : '#808080',
                    fontFamily:'Quicksand-Regular',
                    fontSize: fontSize ? fontSize : 25,
                    height:'80%',
                    width: '95%',
                    alignSelf:'center',
                    elevation:5,
                    fontWeight: fontWeight ? fontWeight : 'normal',
                    borderRadius:10
                }}
            ></TextInput>
        </View>
    );
}
export default PetsTextInput;
