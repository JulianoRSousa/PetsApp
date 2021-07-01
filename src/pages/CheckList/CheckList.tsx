import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Text, Dimensions, Image, StatusBar } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as AppColors from '../../assets/strings/Colors';
import * as AppFonts from '../../assets/strings/Fonts';
import PetsModal from "../../components/PetsModal";
import { useModal } from '../../contexts/modal'
import AsyncStorage from "@react-native-community/async-storage";


const rem = Dimensions.get("window").width / 380;

const CheckList: React.FC = () => {

  const [taskOne, setTaskOne] = useState('');
  const [taskTwo, setTaskTwo] = useState('');
  const modal = useModal();

  useEffect(() => {
    checkStorage()
  }, [taskOne,taskTwo])

  async function checkStorage() {
    const taskOne = await AsyncStorage.getItem('taskOne')
    const taskTwo = await AsyncStorage.getItem('taskTwo')
    setTaskOne(String(taskOne))
    setTaskTwo(String(taskTwo))
  }

  async function setItem(key, value) {
    await AsyncStorage.setItem(key, value)
    checkStorage();
  }

  return (
    <ScrollView style={{ backgroundColor: AppColors.base }}>
      <PetsModal />
      <View>
        <TouchableOpacity style={{
          backgroundColor: "#fff3",
          borderColor: '#c1c1c1',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          height: 50 * rem,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
          onPress={() => modal.ShowModal(
            'OneButton',
            'Estilo de Post', '*Criar uma estilo de post(quadrado ou retangulo vertical). '
            + '' + 'Sugestão de informações a exibir: Nome de Usuário, Data da postagem (1 dias atras, '
            + '' + '10 minutos atras atc..) *Foto do pet, *Status do post(pet perdido, pet pra adoção, '
            + '' + 'pet encontrado etc), *Descrição do post, *Interação(curtir, comentar e compartilhar, denunciar etc),'
          + ' *Um Botão pra chat * - Outras opções fica a sua escolha',
            'Entendi',
            () => checkStorage()
          )}>
          {taskOne == 'finalizada' ? <Text style={{
            paddingHorizontal: 10 * rem,
            color: AppColors.lightFont,
            fontFamily: AppFonts.mainFont,
            fontSize: 16 * rem,
            textDecorationLine: 'line-through'
          }}>Criar Estilo de post</Text> :
            <>
              <Text style={{
                paddingHorizontal: 10 * rem,
                color: AppColors.lightFont,
                fontFamily: AppFonts.mainFont,
                fontSize: 16 * rem,
              }}>Criar Estilo de post</Text>
              <BouncyCheckbox
                size={18 * rem}
                fillColor="#0eeb50ac"
                unfillColor="#fff"
                iconStyle={{ borderColor: AppColors.baseLight }}
                textStyle={{ fontFamily: "SomethingRegular" }}
                onPress={() => { modal.ShowModal('TwoButtons', 'Task', 'Concluiu essa tarefa?', 'sim', () => setItem('taskOne', 'finalizada'), 'Não') }}
                useNativeDriver={true}
              />
            </>
          }

        </TouchableOpacity>

      </View>
      <View>
        <TouchableOpacity style={{
          backgroundColor: "#fff3",
          borderColor: '#c1c1c1',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          height: 50 * rem,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
          onPress={() => modal.ShowModal(
            'OneButton',
            'Tela para Criar Post', '*Tela onde o usuário possa criar uma postagem - algumas sugestões são: '
            + '- Finalidade do post(se é um post pra adoção, animal perdido e tal) - ' +
            'um botão tipo "selecionar foto". - Espaço pra descrição. etc ***Pode separar esse formulario em mais telas'
          + ' caso ache necessario',
            'Entendi',
            () => console.log('deu')
          )}>
          {taskTwo == 'finalizada' ? <Text style={{
            paddingHorizontal: 10 * rem, color: AppColors.lightFont, fontFamily: AppFonts.mainFont,
            textDecorationLine: 'line-through',
            fontSize: 16 * rem,
          }}>Criar tela para adicionar postagem</Text>
            : <><Text style={{
              paddingHorizontal: 10 * rem, color: AppColors.lightFont, fontFamily: AppFonts.mainFont,
              fontSize: 16 * rem,
            }}>Criar tela para adicionar postagem</Text>
              <BouncyCheckbox
                size={18 * rem}
                fillColor="#0eeb50ac"
                unfillColor="#fff"
                iconStyle={{ borderColor: AppColors.baseLight }}
                textStyle={{ fontFamily: "SomethingRegular" }}
                onPress={() => { modal.ShowModal('TwoButtons', 'Task', 'Concluiu essa tarefa?', 'sim', () => setItem('taskTwo', 'finalizada'), 'Não') }}
                useNativeDriver={true}
              />
            </>}

        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default CheckList;
