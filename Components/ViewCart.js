import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ViewCart = () => {
  const itemss = useSelector((state) => state.CartReducer.selectItems.items)
  const total = itemss.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD"
  })

  console.log(totalUSD);
  return (
      <>
        <TouchableOpacity style={{width: '60%', flexDirection: 'row', bottom: 10, height: 40, backgroundColor: 'black',position: 'fixed', marginRight: '15%', marginLeft: '20%', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>View Cart</Text>
          <Text style={{color: 'white', marginLeft: '5%'}}>{totalUSD}</Text>
        </TouchableOpacity>
      </>
  )
}

export default ViewCart