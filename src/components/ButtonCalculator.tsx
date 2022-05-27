import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IProps {
  text: string
  color?: '#A8DADC' | '#E63946' | '#457B9D'
  doubleWidth?: boolean
  action: (numberText: string) => void
}

export const ButtonCalculator = ({text,color='#A8DADC', doubleWidth=false,action}:IProps) => {


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
          color: (color === '#E63946' || color === '#457B9D') ? 'white' : '#333335'
        }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
