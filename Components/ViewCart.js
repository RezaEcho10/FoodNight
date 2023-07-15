import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ViewCart = () => {
  return (
      <TouchableOpacity style={{width: '60%',bottom: 10, height: 40, backgroundColor: 'black',position: 'fixed', marginRight: '15%', marginLeft: '20%', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>View Cart</Text>
      </TouchableOpacity>
  )
}

export default ViewCart