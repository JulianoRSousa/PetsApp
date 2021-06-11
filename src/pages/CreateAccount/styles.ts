import styled from "styled-components/native";
import * as AppColors from "../../assets/Colors";

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
  margin-bottom: 2px;
`;
export const PetsTextInputMinor = styled.TextInput`
  background-color: ${AppColors.light};
  width: 97%;
  height: 84%;
  font-size: 16px;
  font-family: "Quicksand-Regular";
  color: ${AppColors.darkLightfont};
`;
