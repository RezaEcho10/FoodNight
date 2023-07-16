import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const OrderItem = ({item}) => {
    const { name, price } = item
  return (
    <View style={{borderBottomColor: '#999', borderBottomWidth: 1, padding: 15}}>
      <View style={{width: '100%', margin: 'auto', marginTop: 10}}>
        <View style={{width: '90%', margin: 'auto', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'black'}}>{name}</Text>
        <Text style={{color: 'black'}}>{price}</Text>
        </View>
      </View>
    </View>
  )
}

export default OrderItem