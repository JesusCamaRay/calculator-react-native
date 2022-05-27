import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeAreaView:{
      flex:1,
      backgroundColor:'black',
    },
    calculatorContainer:{
      justifyContent:'flex-end',
      paddingHorizontal:20,
      flex:1,
    },
    result:{
      color:'white',
      fontSize:60,
      textAlign:'right',
      marginBottom:10
    },
    littleResult:{
      color:'rgba(255,255,255,0.5)',
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
      color:'white',
      fontWeight: '300',
    }
});