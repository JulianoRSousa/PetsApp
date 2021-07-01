import React, { useEffect } from 'react';
import { Text, View, Modal, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { BlurView } from '@react-native-community/blur'
import * as AppColors from "../assets/strings/Colors";
import * as AppFonts from "../assets/strings/Fonts";
import { useModal } from '../contexts/modal';


const PetsModal: React.FC = ({ children }) => {

  const rem = Dimensions.get("window").width / 380;
  const modal = useModal()
  useEffect(() => {
  }, [modal.isVisible])
  if (modal.isVisible) {
    if (modal.type == 'OneButton') {
      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={true}
        >
          <BlurView
            reducedTransparencyFallbackColor="gray"
            blurType="light"
            blurAmount={10}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <View
              style={{
                minWidth: "75%",
                backgroundColor: "#fffffff1",
                minHeight: 170 * rem,
                borderRadius: 30 * rem,
                alignItems: "center",
                elevation: 8,
              }}>
              <View
                style={{
                  minHeight: 45 * rem,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#6663",
                }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: AppColors.darkFont,
                    fontFamily: AppFonts.mainFontSemiBold,
                    textAlignVertical: "center",
                    fontSize: 18 * rem,
                  }}>
                  {modal.tittle}
                </Text>
              </View>
              <View
                style={{
                  minHeight: 115 * rem,
                  width: "75%",
                }}>
                <View
                  style={{
                    width: "100%",
                  }}>
                  <Text
                    style={{
                      paddingVertical: 10 * rem,
                      fontFamily: AppFonts.mainFont,
                      textAlign: "center",
                      fontSize: 14 * rem,
                    }}>
                    {modal.message}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderRadius: 10 * rem,
                    minHeight: "15%",
                    minWidth: '70%',
                    maxWidth: '95%',
                    backgroundColor: "#ff843ddd",
                    justifyContent: "center",
                    alignSelf: 'center'
                  }}
                  onPress={() => {modal.handlewActionOne(), modal.CloseModal()}}>
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: AppFonts.mainFont,
                      textAlign: "center",
                      fontSize: 14 * rem,
                    }}>
                    {modal.buttonOneMessage}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else {
      return (

        <Modal
          animationType="fade"
          transparent={true}
          visible={modal.isVisible}
          statusBarTranslucent={true}
          onRequestClose={() => {
          }}>
          <BlurView
            reducedTransparencyFallbackColor="gray"
            blurType="light"
            blurAmount={10}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
          <StatusBar hidden={true} backgroundColor={AppColors.base} />
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <View
              style={{
                width: "75%",
                backgroundColor: "#fffffff1",
                minHeight: 170 * rem,
                maxHeight: 200 * rem,
                borderRadius: 30 * rem,
                alignItems: "center",
                elevation: 8,
              }}>
              <View
                style={{
                  minHeight: 45 * rem,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#6663",
                }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: AppColors.darkFont,
                    fontFamily: AppFonts.mainFontSemiBold,
                    textAlignVertical: "center",
                    fontSize: 18 * rem,
                  }}>
                  {modal.tittle}
                </Text>
              </View>
              <View
                style={{
                  minHeight: 115 * rem,
                  width: "75%",
                }}>
                <View
                  style={{
                    width: "100%",
                  }}>
                  <Text
                    style={{
                      paddingVertical: 10 * rem,
                      fontFamily: AppFonts.mainFont,
                      textAlign: "center",
                      fontSize: 14 * rem,
                    }}>
                    {modal.message}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{
                      alignSelf: "center",
                      borderRadius: 15 * rem,
                      height: "70%",
                      width: '50%',
                      backgroundColor: "#ff843ddd",
                      justifyContent: "center",
                    }}
                    onPress={() => { modal.handlewActionTwo(), modal.CloseModal() }}>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: AppFonts.mainFont,
                        textAlign: "center",
                        fontSize: 14 * rem,
                      }}>
                      {modal.buttonTwoMessage}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignSelf: "center",
                      borderRadius: 15 * rem,
                      height: "70%",
                      width: '50%',
                      backgroundColor: "#4b7bffdd",
                      justifyContent: "center",
                    }}
                    onPress={() => { modal.handlewActionOne(), modal.CloseModal() }}>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: AppFonts.mainFont,
                        textAlign: "center",
                        fontSize: 14 * rem,
                      }}>
                      {modal.buttonOneMessage}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      );
    }
  } else {
    return <></>;
  }
};

export default PetsModal;