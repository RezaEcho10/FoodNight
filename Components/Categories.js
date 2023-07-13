import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {Foods} from '../Constant'

const Categories = () => {
  return (
    <ScrollView style={{width: '95%', margin: 'auto'}} horizontal showsHorizontalScrollIndicator={false}>
      {
        Foods.map(food => (
            <View style={{
                alignItems: 'center',
                marginRight: 30
            }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    resizeMode: 'contain'
                }} source={food.image} />
                <Text style={{fontSize: 13, fontWeight: 300}}>{food.name}</Text>
            </View>
        ))
      }
    </ScrollView>
  )
}

export default Categories