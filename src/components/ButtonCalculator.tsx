import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IProps {
  text: string
  color?: '#9B9B9B' | '#2D2D2D' | '#FF9427'
  doubleWidth?: boolean
  action: (numberText: string) => void
}

export const ButtonCalculator = ({text,color='#2D2D2D', doubleWidth=false,action}:IProps) => {


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
          color: (color === '#9B9B9B') ? 'black' : 'white'
        }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}