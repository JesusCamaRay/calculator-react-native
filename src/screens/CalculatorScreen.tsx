import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalculator } from '../components/ButtonCalculator'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
  
  const {
    lastNumber, 
    number,
    clean,
    toggleSign,
    removeLastChar,
    divideNumbers,
    buildNumber,
    multiplyNumbers,
    substractNumbers,
    addNumbers,
    calculate} = useCalculator()
  
  return (
    <>
      <Text style={styles.title}>Angelo 😎</Text>
      <View style={styles.calculatorContainer}>
        {
          (lastNumber !== '0') && <Text style={styles.littleResult}>{lastNumber}</Text>
        }
        <Text 
          style={styles.result}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{number}</Text>

        <View style={styles.row}>
          <ButtonCalculator text='C' color='#FF9F1C' action={clean}/>
          <ButtonCalculator text='+/-' color='#FF9F1C' action={toggleSign} />
          <ButtonCalculator text='del' color='#FF9F1C' action={removeLastChar}/>
          <ButtonCalculator text='/' color='#FFBF69' action={divideNumbers}/>
        </View>
        <View style={styles.row}>
          <ButtonCalculator text='7' action={buildNumber}/>
          <ButtonCalculator text='8' action={buildNumber} />
          <ButtonCalculator text='9' action={buildNumber}/>
          <ButtonCalculator text='x' color='#FFBF69' action={multiplyNumbers}/>
        </View>
        <View style={styles.row}>
          <ButtonCalculator text='4' action={buildNumber}/>
          <ButtonCalculator text='5' action={buildNumber}/>
          <ButtonCalculator text='6' action={buildNumber}/>
          <ButtonCalculator text='-' color='#FFBF69' action={substractNumbers}/>
        </View>
        <View style={styles.row}>
          <ButtonCalculator text='1' action={buildNumber}/>
          <ButtonCalculator text='2' action={buildNumber}/>
          <ButtonCalculator text='3' action={buildNumber}/>
          <ButtonCalculator text='+' color='#FFBF69' action={addNumbers}/>
        </View>
        <View style={styles.row}>
          <ButtonCalculator text='0' doubleWidth action={buildNumber}/>
          <ButtonCalculator text='.' action={buildNumber}/>
          <ButtonCalculator text='=' color='#FFBF69' action={calculate}/>
        </View>
      </View>
    </>
  )
}
