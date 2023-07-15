import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {Foods} from '../Constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ResturantItem = ({navigation}) => {

  return (
    <ScrollView>
      {
        Foods.map(food => (
            <TouchableOpacity onPress={() => navigation.navigate("ResturantDetails", {
                name: food.name,
                img: food.image,
                description: food.description,
                price: food.price
            })}>
            <View>
                <ResturantImage img={food.image} />
                <ResturantInfo name={food.name} />
            </View>
            </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}

const ResturantImage = (props) => {
    return (
            <View style={{
            width: '100%',
            margin: 'auto',
            marginTop: 30,
        }}>
            <Image style={{width: '100%', height: 200}} source={props.img} />
            <TouchableOpacity style={{position: 'absolute', top: 5, right: 10}}>
                <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
            </TouchableOpacity>
        </View>
    )
}

const ResturantInfo = (props) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, width: '95%', margin: 'auto'}}>
            <View>
                <Text>{props.name}</Text>
                <Text>15 - 30 Min</Text>
            </View>
            <Text>4.5</Text>
        </View>
    )
}

export default ResturantItem