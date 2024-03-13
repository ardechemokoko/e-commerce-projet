import { 
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle'

export default function CourseItems(props) {
  return (
    <TouchableHighlight
        onPress={props.viewDetail}
        underlayColor={GlobalStyle.green}
    >
            <View style={styles.courseContainer}>

           
        <View style={styles.imageCOntainer}>
            <Image
                source={{uri:props.image}}
                style={styles.image}
            />
        </View>
        <View style={styles.courseContainerDetails}>
            <Text  style={styles.courseTitle}>{props.title}</Text>
            <Text  style={styles.coursePrice}>{props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity
                onPress={props.viewDetail}
            >
                <MaterialIcons name="remove-red-eye" size={35} color={GlobalStyle.green} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={props.addToCard}
            >
                <MaterialIcons name="shopping-basket" size={35} color={GlobalStyle.green} />
            </TouchableOpacity>
        </View>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    courseContainer:{
        backgroundColor:GlobalStyle.white,
        borderRadius:10,
        height:300,
        margin:25,
        borderColor:GlobalStyle.lightGreen,
        borderWidth:1,
    },
    imageCOntainer:{
        width:"100%",
        height:"60%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        width:"100%",
        height:"100%" 
    },
    courseContainerDetails:{
        alignItems:'center',
        height:'20%',
        padding:10
    },
    courseTitle:{
        fontSize:18,
        marginVertical:4,
        color:GlobalStyle.green,
        textTransform:'uppercase',
    },
    coursePrice:{
        color:GlobalStyle.lightGrey,
        fontSize:16
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:"20%",
        paddingHorizontal:30,
    }
})