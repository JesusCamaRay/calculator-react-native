import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeAreaView:{
      flex:1,
      backgroundColor:'#F1FAEE',
    },
    title:{
      textAlign: 'center',
      marginTop: 30,
      fontSize:50,
      color:'#333335',
    },
    calculatorContainer:{
      justifyContent:'flex-end',
      paddingHorizontal:20,
      flex:1,
    },
    result:{
      color:'#2d2d34',
      fontSize:60,
      textAlign:'right',
      marginBottom:10
    },
    littleResult:{
      color:'#333335',
      fontSize:30,
      textAlign:'right',
    },
    row:{
      flexDirection:'row',
      justifyContent:'center',
      marginBottom:18,
      paddingHorizontal: 10,

    },
    button: {
      height: 80,
      width: 80,
      borderRadius:100,
      justifyContent: 'center',
      marginHorizontal:10

    },
    buttonText: {
      textAlign:'center',
      padding:10,
      fontSize: 30,
      fontWeight: '400',
    }
});