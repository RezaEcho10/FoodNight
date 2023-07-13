import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import ResturantItem from '../Components/ResturantItem'
import FooterTabs from '../Components/FooterTabs'
const Home = () => {
  return (
    <SafeAreaView style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 10, width: '95%', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <ResturantItem />
      <FooterTabs />
    </SafeAreaView>
  )
}

export default Home