import React, { useRef, useState } from 'react'

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState('0')
  const [number, setNumber] = useState('0')
  const lastOperation = useRef<Operators>()

  const clean = ()=>{
    setNumber('0')
    setLastNumber('0')
  }

  const buildNumber = (numberText: string)=>{
    //Verify if there is a dot decimal in number
    if(number.includes('.') && numberText ==='.') return;

    //Verify if the number starts with 0 or -0
    if(number.startsWith('0')|| number.startsWith('-0')){
      //verify first dot decimal
      if(numberText==='.'){
        setNumber(number + numberText)
       //Evaluate if other zero and there is a point
      }else if(numberText ==='0' && number.includes('.')){
        setNumber(number + numberText)
        //Evaluate if it is different from zero and no point
      } else if(numberText!=='0' && !number.includes('.')){
        setNumber( numberText)
      } else if(numberText==='0' && !number.includes('.')){
        setNumber(number)
      } else {
        setNumber(number + numberText)
      }


    }else{
      setNumber(number + numberText)
    }


  }

  const toggleSign = () => {
    if(number.includes('-')){
      setNumber(number.replace('-',''))
    }else{
      setNumber('-'+number)
    }
  }

  // remove last char of number or return 0 if length is lower than 1 or equal to 2 but negative
  const removeLastChar = () => {
    if(number.length <= 1 || number.length === 2 && number.includes('-')){
      setNumber('0')
    }else{
      setNumber(number.slice(0,-1))
    }
  }

  const changeNumberToLastNumber = () => {
    if(number.endsWith('.')){
      setNumber(number.slice(0,-1))
    } else {
      setLastNumber(number)
    }
    
    setNumber('0')
  }

  const divideNumbers = () => {
    changeNumberToLastNumber()
    lastOperation.current = Operators.divide
  }
  const multiplyNumbers = () => {
    changeNumberToLastNumber()
    lastOperation.current = Operators.multiply
  }
  const addNumbers = () => {
    changeNumberToLastNumber()
    lastOperation.current = Operators.add
  }
  const substractNumbers = () => {
    changeNumberToLastNumber()
    lastOperation.current = Operators.substract
  }

  const calculate = () => {

    const num1 = Number(number)
    const num2 = Number(lastNumber)

    switch(lastOperation.current){
      case Operators.add:
        setNumber(`${num1 + num2}`)
        break
      case Operators.substract:
        setNumber(`${num2 - num1}`)
        break
      case Operators.multiply:
        setNumber(`${num1 * num2}`)
        break
      case Operators.divide:
        if(num1 === 0){
          setNumber('0')
        }else{
          setNumber(`${num2 / num1}`)
        }
        break
      default:
        break
    }
    setLastNumber('0')
  }

  return {
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
    calculate}

}
