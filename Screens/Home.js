import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'
const Home = () => {
  return (
    <SafeAreaView style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 10, width: '95%', backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}

export default Home