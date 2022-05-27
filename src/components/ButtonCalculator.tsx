import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IProps {
  text: string
  color?: '#FF9F1C' | '#FFBF69' | '#2EC4B6'
  doubleWidth?: boolean
  action: (numberText: string) => void
}

export const ButtonCalculator = ({text,color='#2EC4B6', doubleWidth=false,action}:IProps) => {


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
          color: (color === '#FF9F1C' || color === '#2EC4B6') ? 'white' : '#333335'
        }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
