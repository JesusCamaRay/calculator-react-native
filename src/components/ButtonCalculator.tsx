import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IProps {
  text: string
  color?: '#B8C0FF' | '#E7C6FF' | '#FFD6FF'
  doubleWidth?: boolean
  action: (numberText: string) => void
}

export const ButtonCalculator = ({text,color='#B8C0FF', doubleWidth=false,action}:IProps) => {


  return (
    <TouchableOpacity
      onPress={()=>action(text)}
    >
      <View style={[
        styles.button,
        {backgroundColor:color},
        doubleWidth ? {width: 180} : {}
        ]}>
        <Text style={[styles.buttonText,{
          color: (color === '#B8C0FF') ? 'white' : '#333335'
        }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
