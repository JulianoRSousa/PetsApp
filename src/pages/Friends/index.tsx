import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, Image, TouchableOpacity, } from "react-native";
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import style from "../Friends/styles";
import * as AppColors from '../../assets/Colors';

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
            style={style.flatList}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => OpenUserProfile(item._id)}
                style={style.flatListComponent}>
                <Image
                  source={{ uri: item.picture_url }}
                  style={style.imageSearchUser}
                />
                <View style={{ justifyContent: 'flex-start' }}>
                  <Text
                    style={style.textH3}>{' ' + String(item.firstName) + ' ' + item.lastName}
                  </Text>
                  <Text
                    style={style.textH5black}>
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
        <View style={style.viewNotFoundUser}>
          {searched ? <View style={style.viewNotFoundUser2}>
            <Text style={style.textH4black}>Nenhum Resultado encontrado</Text>
            <Image source={require('../../assets/images/notFound.png')}
              style={style.imageNotFound} />
            <Text style={style.textH4white}>Que tal tentar de novo?</Text>

          </View> : <View />}
        </View>
      )
    }
  }


  return (
    <View style={{ backgroundColor: AppColors.base2, flex: 1 }}>
      <View style={style.viewSearchBar}>
        <TextInput style={style.textInputSearchBar}
          value={tags}
          onChangeText={text => { setTags(text), Search(text) }}
          placeholder={'buscar Amigos'}
          onSubmitEditing={() => Search(tags)}></TextInput>
      </View>
      <View style={style.viewSearchField}>
        {resultView()}
      </View>
    </View>
  );
};

export default Friends;