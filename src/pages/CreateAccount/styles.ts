import styled from "styled-components/native";
import { Dimensions } from "react-native";
import * as AppColors from '../../assets/Colors';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const PetsInputTextView = styled.View`
 height: 90px;
 width: 90px;
 background-color: ${AppColors.darkBase};
`;
export const PetsTextInput = styled.TextInput`
 height: 90px;
 width: 90px;
 background-color: ${AppColors.darkBase};
`;