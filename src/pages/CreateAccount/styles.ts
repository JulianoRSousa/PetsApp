import styled from "styled-components/native";
import * as AppColors from "../../assets/Colors";
import {StyleSheet, Dimensions} from "react-native";

const height = Dimensions.get("window").height;
const rem = Dimensions.get("window").width / 380;

export const PetsInputTextView = styled.View`
  background-color: ${AppColors.darkBase};
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 8.5%;
  margin-top: 4px;
  margin-bottom: 4px;
`;
export const PetsTextInput = styled.TextInput`
  background-color: ${AppColors.light};
  width: 97%;
  height: 84%;
  font-family: "Quicksand-Regular";
  font-size: 20px;
  color: #f00;
`;

export const PetsInputTextViewMinor = styled.View`
  background-color: ${AppColors.darkBase};
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 7%;
  margin-top: 2px;
  margin-bottom: 4px;
  border-radius: 10px;
`;
export const PetsTextInputMinor = styled.TextInput`
  background-color: ${AppColors.light};
  width: 97%;
  height: 84%;
  font-size: 16 * rem;
  font-family: "Quicksand-Regular";
  color: ${AppColors.darkLightfont};
  border-radius: 10rem;
`;

const style = StyleSheet.create({
  textH2: {
    width: "100%",
    height: "7%",
    marginVertical: 5 * rem,
    alignSelf: "center",
    backgroundColor: "#F9A862",
    fontFamily: "Quicksand-Regular",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30 * rem,
    color: AppColors.light,
    elevation: 8 * rem,
  },
  textH4: {
    marginVertical: 7 * rem,
    color: AppColors.light,
    fontSize: 12 * rem,
  },
  textH5: {
    fontSize: 10 * rem,
    color: AppColors.light,
    fontFamily:'Quicksand-Regular',
  },
  iconImage: {
    height: 28*rem, 
    width: 28*rem, 
    resizeMode: 'stretch'
  },
  backgroundImage: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogo: {
    fontFamily: "SomethingRegular",
    color: AppColors.light,
    fontSize: 90 * rem,
  },
  textInputMask: {
    width: "97%",
    height: "84%",
    backgroundColor: AppColors.light,
    fontSize: 16 * rem,
    paddingHorizontal: 10 * rem,
    fontFamily: "Quicksand-Light",
    color: AppColors.darkLightfont,
    borderRadius: 10 * rem,
  },
});

export default style;
