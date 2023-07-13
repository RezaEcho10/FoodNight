import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={{marginTop: 10,position: 'relative'}}>
      <TextInput style={{
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 30,
        paddingLeft: 30
      }} 
      placeholder='Search'
      />
      <Ionicons style={{position: 'absolute', marginTop: 7, marginLeft: '2%'}} name='location-sharp' size={24} />
      <View style={{
        backgroundColor: 'white',
        position: 'absolute',
        right: 0,
        width: 70,
        height: 34,
        borderRadius: 15,
        marginTop: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <AntDesign name='clockcircle' size={12} />
        <Text>Search</Text>
      </View>
    </View>
  )
}

export default SearchBar