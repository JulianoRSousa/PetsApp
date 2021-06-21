import React, { useState, useEffect } from 'react';
import { Modal, View, Dimensions, TouchableOpacity, Text, StatusBar } from 'react-native'

import * as AppColors from '../assets/strings/Colors';
import * as AppFonts from '../assets/strings/Fonts';
import { BlurView } from "@react-native-community/blur";
import NavigationBar from 'react-native-navbar-color';


const PetsModal: React.FC<any> = ({ visible, type, message }) => {

  const rem = (Dimensions.get('window').width) / 380;
  const [isVisible , setIsVisible] = useState(true)

  useEffect(() => {
   loadType(type);
  }, [])
  
  function loadType(type){
    NavigationBar.setColor(AppColors.base)
    if(type == 1){
    return(
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(false)
      }}
    >
      <StatusBar hidden={true} />
      <BlurView
        reducedTransparencyFallbackColor="gray"
        blurType="light"
        blurAmount={10}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
      />
      <View style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View
          style={{
            width: '75%',
            backgroundColor: '#fffffff1',
            minHeight: 170 * rem,
            maxHeight: 200 * rem,
            borderRadius: 30 * rem,
            alignItems: 'center',
            elevation: 8
          }}>
          <View style={{
            minHeight: 45 * rem,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#6663',
          }}>
            <Text style={{
              textAlign: 'center',
              color: AppColors.darkFont,
              fontFamily: AppFonts.mainFontSemiBold,
              textAlignVertical: 'center',
              fontSize: 18 * rem,
            }}>Hello World!</Text>
          </View>
          <View
            style={{
              minHeight: 115 * rem,
              width: '75%'
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text
                style={{
                  paddingVertical: 10 * rem,
                  fontFamily: AppFonts.mainFont,
                  textAlign: 'center',
                  fontSize: 14 * rem
                }}>{message? message: ''}</Text>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                borderRadius: 10 * rem,
                height: '35%',
                width: '90%',
                backgroundColor: '#ff843ddd',
                justifyContent: 'center',
              }} onPress={() => closeModal()} >
              <Text style={{
                color: '#fff',
                fontFamily: AppFonts.mainFont,
                textAlign: 'center', fontSize: 14 * rem
              }}>fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )}
  else if(type == 2){
    return(
      <Modal
      animationType='fade'
      transparent={true}
      visible={visible ? visible : isVisible}
      onRequestClose={() => {
        setIsVisible(false)
      }}
    >
      <StatusBar hidden={true} />
      <BlurView
        reducedTransparencyFallbackColor="gray"
        blurType="light"
        blurAmount={10}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
      />
      <View style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View
          style={{
            width: '75%',
            backgroundColor: '#fffffff1',
            minHeight: 170 * rem,
            maxHeight: 200 * rem,
            borderRadius: 30 * rem,
            alignItems: 'center',
            elevation: 8
          }}>
          <View style={{
            minHeight: 45 * rem,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#6663',
          }}>
            <Text style={{
              textAlign: 'center',
              color: AppColors.darkFont,
              fontFamily: AppFonts.mainFontSemiBold,
              textAlignVertical: 'center',
              fontSize: 18 * rem,
            }}>Hello World!</Text>
          </View>
          <View
            style={{
              minHeight: 115 * rem,
              width: '75%'
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text
                style={{
                  paddingVertical: 10 * rem,
                  fontFamily: AppFonts.mainFont,
                  textAlign: 'center',
                  fontSize: 14 * rem
                }}>{message ? message : ''}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                borderRadius: 10 * rem,
                height: '35%',
                backgroundColor: '#ff843ddd',
                justifyContent: 'center',
              }} onPress={() => closeModal()} >
              <Text style={{
                color: '#fff',
                fontFamily: AppFonts.mainFont,
                textAlign: 'center', fontSize: 14 * rem
              }}>fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                borderRadius: 10 * rem,
                height: '35%',
                backgroundColor: '#4b7bffdd',
                justifyContent: 'center',
              }} onPress={() => closeModal()} >
              <Text style={{
                color: '#fff',
                fontFamily: AppFonts.mainFont,
                textAlign: 'center', fontSize: 14 * rem
              }}>fechar</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
    )
  }
  }

  

  function closeModal(){
    setIsVisible(false)
    return false
  }


  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(false)
      }}
    >
      <StatusBar hidden={true} />
      <BlurView
        reducedTransparencyFallbackColor="gray"
        blurType="light"
        blurAmount={10}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
      />
      <View style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View
          style={{
            width: '75%',
            backgroundColor: '#fffffff1',
            minHeight: 170 * rem,
            maxHeight: 200 * rem,
            borderRadius: 30 * rem,
            alignItems: 'center',
            elevation: 8
          }}>
          <View style={{
            minHeight: 45 * rem,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#6663',
          }}>
            <Text style={{
              textAlign: 'center',
              color: AppColors.darkFont,
              fontFamily: AppFonts.mainFontSemiBold,
              textAlignVertical: 'center',
              fontSize: 18 * rem,
            }}>Hello World!</Text>
          </View>
          <View
            style={{
              minHeight: 115 * rem,
              width: '75%'
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text
                style={{
                  paddingVertical: 10 * rem,
                  fontFamily: AppFonts.mainFont,
                  textAlign: 'center',
                  fontSize: 14 * rem
                }}>{message ? message : ''}</Text>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                borderRadius: 10 * rem,
                height: '35%',
                width: '90%',
                backgroundColor: '#ff843ddd',
                justifyContent: 'center',
              }} onPress={() => closeModal()} >
              <Text style={{
                color: '#fff',
                fontFamily: AppFonts.mainFont,
                textAlign: 'center', fontSize: 14 * rem
              }}>fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default PetsModal;