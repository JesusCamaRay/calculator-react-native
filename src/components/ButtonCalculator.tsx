import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IProps {
  text: string
  color?: '#A9FDAC' | '#44cf6c' | '#32a287'
  doubleWidth?: boolean
  action: (numberText: string) => void
}

export const ButtonCalculator = ({text,color='#cdc1ff', doubleWidth=false,action}:IProps) => {


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
          color: (color === '#7371FC') ? 'white' : '#333335'
        }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
