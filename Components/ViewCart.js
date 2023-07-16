import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

const ViewCart = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const itemss = useSelector((state) => state.CartReducer.selectItems.items)
  const total = itemss.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD"
  })

  const Checkout = () => {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '50%',bottom: 0, position:'absolute'}}>
        {
          itemss.map((item) => (
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <OrderItem item={item} />
            </TouchableOpacity>
          ))
        }
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10
        }}>
            <Text>Total</Text>
            <Text>{totalUSD}</Text>
        </View>
        <TouchableOpacity style={{width: '40%', height: 40, backgroundColor: 'black', margin: 'auto', borderRadius: 30,  alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
      <>
      <Modal
       animationType='slide'
       visible={modalVisible}
       transparent={true}
       onRequestClose={() => setModalVisible(false)}
      >
        {Checkout()}
      </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{width: '60%', flexDirection: 'row', bottom: 10, height: 40, backgroundColor: 'black',position: 'fixed', marginRight: '15%', marginLeft: '20%', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>View Cart</Text>
          <Text style={{color: 'white', marginLeft: '5%'}}>{totalUSD}</Text>
        </TouchableOpacity>
      </>
  )
}

export default ViewCart