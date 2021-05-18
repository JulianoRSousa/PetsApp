import React from "react";
import { TouchableOpacity, View, Text, } from "react-native";
import * as AppColors from '../assets/Colors';
import {useNavigation, useNavigationState} from '@react-navigation/native';



function ButtonTabBar() {
    const navigation = useNavigationState(state => state);
    return (
        <TouchableOpacity style={{ flex: 1, backgroundColor: AppColors.baseLight }}>
            <View style={{ flex: 1, backgroundColor: AppColors.baseLight }}>
                <Text>{navigation.index}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonTabBar;
