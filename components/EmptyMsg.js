import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'

export default function EmptyMsg(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
       
    },
    myText:{
        color:GlobalStyle.green,
        fontSize:18,
    }
})