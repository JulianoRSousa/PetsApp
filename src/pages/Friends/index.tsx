import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, Image, TouchableOpacity, } from "react-native";
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Crashes from 'appcenter-crashes';


const Friends: React.FC = () => {

  const navigation = useNavigation();

  const [tags, setTags] = useState('');
  const [resultSearch, setResultSearch] = useState<any>([]);
  const [searched, setSearched] = useState(false)

  async function Search(tags) {
    !searched ? setSearched(true) : (tags.length != 0 ? console.log('not go') : setSearched(false))
    await api.get('/searchFriends', {
      headers: {
        tags: tags,
      },
    }).then(async Res => {
      setResultSearch(Res.data)
    })
  }

  async function OpenUserProfile(user_id) {
    navigation.navigate('UserProfile', {
      userID: user_id,
    })
  }

  function resultView() {
    if (resultSearch.length) {
      return (
        <View>
          <FlatList
            data={resultSearch}
            ListHeaderComponent={<View style={{
              height: 20, borderTopStartRadius: 50, borderTopEndRadius: 50,
              backgroundColor: '#333d'
            }}></View>}
            ListFooterComponent={<View style={{
              height: 20, borderBottomStartRadius: 50, borderBottomEndRadius: 50,
              backgroundColor: '#333d'
            }}></View>}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => OpenUserProfile(item._id)} style={{
                alignItems: 'center',
                flexDirection: 'row', width: "100%",
                backgroundColor: '#333d',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: '#3338'
              }}>
                <Image
                  source={{ uri: item.picture_url }}
                  style={{ resizeMode: 'contain', height: 50, width: 50, borderRadius: 50, margin: 8 }}
                />
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      marginHorizontal: 10,
                    }}>{' ' + String(item.firstName) + ' ' + item.lastName}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                      marginHorizontal: 10,
                      marginVertical: 5,
                    }}>
                    {' @' + item.username}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1, width: '100%', alignSelf: 'center', borderRadius: 50, justifyContent: 'flex-start' }}>
          {searched ? <Text style={{marginVertical: 50 ,alignSelf:'center', fontSize: 14}}>Nenhum Resultado encontrado</Text> : <View />}
        </View>
      )
    }
  }


  return (
    <View style={{ backgroundColor: '#ff8637', flex: 1 }}>
      <View style={{ alignSelf: 'center', borderRadius: 50, height: '10%', width: '90%', flexDirection: 'row', backgroundColor: '#fff' }}>
        <TextInput style={{ paddingHorizontal: 25, width: '84%', }}
          value={tags}
          onChangeText={text => { setTags(text), Search(text) }}
          placeholder={'Buscar Amigos'}
          onSubmitEditing={() => Search(tags)}></TextInput>
        <TouchableOpacity style={{ height: 50, 
          width: 50, 
          alignSelf: 'center', 
          borderRadius: 50, 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#35a' }} onPress={() => Search(tags)}>
          <Text style={{ borderRadius: 50, color: '#fff' }}>Go</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', borderRadius: 50, justifyContent: 'flex-start' }}>
        {resultView()}
      </View>
    </View>
  );
};

export default Friends;