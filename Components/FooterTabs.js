import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const FooterTabs = () => {
  return (
    <View style={{flexDirection: 'row',backgroundColor: 'white', paddingLeft: 10, paddingRight: 10,height: 55, justifyContent: 'space-between', position: 'fixed', bottom: 0, width: '100%'}}>
      
        <Icon icon="home" text="Home"/>
        <Icon icon="search" text="Browse"/>
        <Icon icon="shopping-bag" text="Shopping"/>
        <Icon icon="receipt" text="Orders"/>
        <Icon icon="user" text="Account"/>
      
    </View>
  )
}

const Icon = (props) => {
    return (
        <TouchableOpacity style={{alignItems: 'center', marginTop: 7, borderRadius: 10}}>
            <FontAwesome name={props.icon} size={25} />
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FooterTabs