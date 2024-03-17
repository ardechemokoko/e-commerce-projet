import { StyleSheet, Text, View,TouchebleOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CoursesInCart(props) {
  return (
    <View style={styles.coursesContainer}>
      <Text numberOfLines={1} style={styles.courseTitle}>{props.title}</Text>
      <Text style={styles.coursePrice}>{props.price} MAD</Text>
      <TouchebleOpacity
        onPress={props.onDelete}
      >
    <MaterialCommunityIcons name="delete" size={24} color={GlobalStyle.green} />
      </TouchebleOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    coursesContainer:{
        backgroundColor: GlobalStyle.white,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginBottom:10
    },
    courseTitle:{
        width:'60%'
    },
    coursePrice:{
        textAlign:'center',
        paddingRight:9,
        width:'40%',

    }
})