import React from 'react'
import {Text} from 'react-native'


export const Paciente = ({item}) => {

    const {paciente, fecha} = item



  return (
    <Text> {paciente} </Text>
  )
}
