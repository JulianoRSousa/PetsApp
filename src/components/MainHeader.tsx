import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import * as AppColors from '../assets/strings/Colors';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const MainHeader: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex:1, maxHeight: height * .078, maxWidth: width, backgroundColor: AppColors.base }}>
            <StatusBar backgroundColor={AppColors.base2} />
            <View style={{
                backgroundColor: AppColors.base2, alignSelf: 'flex-end', justifyContent: 'center',
                maxHeight: 150, maxWidth: 150, height: height *.09,
            }}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{ backgroundColor: 'white', height: 50, width: 50 }}>
                    <Text>menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainHeader;

const style = StyleSheet.create({

})
