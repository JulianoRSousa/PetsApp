import styled from "styled-components/native";
import * as AppColors from "../../assets/strings/Colors";
import * as AppFonts from "../../assets/strings/Fonts";
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
  font-family: ${AppFonts.mainFont};
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
  font-family: ${AppFonts.mainFont};
  color: ${AppColors.darkLightfont};
  border-radius: 10rem;
`;

const style = StyleSheet.create({
  viewNotFoundUser: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    borderRadius: 50 * rem,
    justifyContent: "flex-start",
  },
  viewNotFoundUser2: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textH2: {
    width: "100%",
    height: "7%",
    marginVertical: 5 * rem,
    alignSelf: "center",
    backgroundColor: "#F9A862",
    fontFamily: AppFonts.mainFont,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30 * rem,
    color: AppColors.light,
  },
  textH4black: {
    fontWeight: "100",
    marginVertical: 7 * rem,
    fontSize: 20 * rem,
    fontFamily: AppFonts.mainFont,
    color: AppColors.darkFont,
  },
  viewSearchBar: {
    alignSelf: "center",
    borderRadius: 20 * rem,
    height: 50 *rem,
    width: "70%",
    flexDirection: "row",
    backgroundColor: AppColors.light,
    elevation: 6,
  },
  textInputSearchBar: {
    fontFamily: AppFonts.mainFont,
    paddingHorizontal: 25 * rem,
    fontSize: 16 * rem,
    width: "90%",
  },
  viewSearchField: {
    flex: 1,
    width: "85%",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  flatListComponent: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderRadius: 20 * rem,
    backgroundColor: AppColors.baseMedium2,
    borderBottomWidth: 2 * rem,
    
    borderColor: AppColors.baseMedium3,
  },
  flatList: {
    backgroundColor: AppColors.baseMedium2,
    borderRadius: 20 * rem,
  },
  textH4white: {
    marginVertical: 7 * rem,
    fontSize: 20 * rem,
    fontFamily: AppFonts.mainFont,
    color: AppColors.lightFont,
    elevation: 8,
  },
  textH5black: {
    fontSize: 10 * rem,
    fontFamily: AppFonts.mainFont,
    color: AppColors.darkFont,
  },
  textH3: {
    fontSize: 14 * rem,
    fontFamily: AppFonts.mainFont,
    color: AppColors.lightFont,
  },
  imageNotFound: {
    height: 130 * rem,
    aspectRatio: 1,
  },
  imageSearchUser: {
    resizeMode: "contain",
    height: 50 * rem,
    width: 50 * rem,
    borderRadius: 50 * rem,
    margin: 8 * rem,
  },
  textH5: {
    fontSize: 10 * rem,
    color: AppColors.light,
  },
  iconImage: {
    height: 28 * rem,
    width: 28 * rem,
    resizeMode: "stretch",
  },
  backgroundImage: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogo: {
    fontFamily: AppFonts.secondFont,
    color: AppColors.light,
    fontSize: 168 * rem,
  },
  textInputMask: {
    width: "97%",
    height: "84%",
    backgroundColor: AppColors.light,
    fontSize: 16 * rem,
    paddingHorizontal: 10 * rem,
    fontFamily: AppFonts.mainFont,
    color: AppColors.darkLightfont,
    borderRadius: 10 * rem,
  },
});

export default style;
