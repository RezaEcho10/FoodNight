import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Foods } from '../Constant'
import ViewCart from '../Components/ViewCart'
import { useDispatch } from 'react-redux'

const ResturantDetails = ({route}) => {
  const {name , img, description, price} = route.params
  const [desc , setDesc] = useState(description.slice(0,100))
  const dispatch = useDispatch()
  const selectItem = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item }
    })
  }
  return (
    <View>
      <Image source={img} style={{width: '100%', height: 200}} />
      <View style={{width: '95%', margin: 'auto', marginTop: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontWeight: 900, fontSize: 16}}>{name}</Text>
            <Text style={{color: 'gray'}}>4.5</Text>
          </View>
          <Text>{price}$</Text>
        </View>
        <Text style={{marginTop: 15}}>{desc}...<TouchableOpacity onPress={() => setDesc(description)}>More</TouchableOpacity></Text>
      </View>
      <View>
        <ScrollView style={{marginTop: 15}}>
          {
            Foods.map(food => (
              <View style={{width: '95%', margin: 'auto', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
                <View>
                  <TouchableOpacity onPress={() => selectItem(food)}>
                    <Text>Add</Text>
                  </TouchableOpacity>
                  <Text style={{fontWeight: 700, fontSize: 14}}>{route.params.name}</Text>
                  <Text style={{color: 'gray', marginBottom: 4, marginTop: 4}}>{price}$</Text>
                  <Text style={{color: 'gray'}}>4.5</Text>
                </View>
                <Image source={route.params.img} style={{width: 80, height:  80, borderRadius: 10}}/>
              </View>
            ))
          }
        </ScrollView>
      </View>
      <ViewCart />
    </View>
  )
}

export default ResturantDetails