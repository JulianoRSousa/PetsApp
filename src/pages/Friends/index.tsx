import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, Image, TouchableOpacity, } from "react-native";
import api from '../../services/api';


const Friends: React.FC = () => {
  const [tags, setTags] = useState('');
  const [resultSearch, setResultSearch] = useState<any>(null);

  async function Search() {
    await api.get('/searchFriends', {
      headers: {
        tags: tags,
      },
    }).then(async Res => {
      setResultSearch(Res.data)
    })
    console.log(resultSearch._id)
  }


  return (
    <>
      <View style={{ height: '10%', width: '100%', flexDirection: 'row', backgroundColor: '#fff' }}>
        <TextInput style={{ width: '80%' }}
          value={tags}
          onChangeText={setTags}
          placeholder={'Buscar Amigos'}
          onSubmitEditing={() => Search()}></TextInput>
        <TouchableOpacity style={{ height: 50, width: 50, alignSelf: 'center', borderRadius:50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35a' }} onPress={() => Search()}>
          <Text style={{ color: '#fff' }}>Go</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: '#ff8637' }}>
        <FlatList
          style={{ backgroundColor: '#222a' }}
          data={resultSearch}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', width: "100%", backgroundColor: '#333d', borderTopWidth: 1, borderColor: '#fff' }}>
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
    </>
  );
};

export default Friends;