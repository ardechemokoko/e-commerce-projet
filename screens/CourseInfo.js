import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GlobalStyle from '../styles/GlobalStyle'
import { MaterialIcons } from '@expo/vector-icons';
import addToCart from '../redux/action/actionAddToCart';

const CourseInfo = ({ navigation, route }) => {
  const courseId = route.params.courseId
  const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId));
  useEffect(() => {
    navigation.setOptions({
      title: selectedCourse.title,
    })

  }, [navigation])
  const dispatch = useDispatch();

  const handleAddToCart = () =>{
    dispatch(addToCart(selectedCourse));
    navigation.goBack();

  }


  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Image
          source={{ uri: selectedCourse.image }}
          style={styles.courseImage}
        />

        <View style={styles.courseDetails}>
          <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
            <Text style={styles.coursePriceText}>{selectedCourse.price} MAD</Text>
        </View>
        <View style={styles.footerBottom}>
          <MaterialIcons 
          name="chevron-left"
           size={40} color={GlobalStyle.white}
           onPress={()=>navigation.goBack()}
            />
          <TouchableOpacity 
            onPress={handleAddToCart}
          >
            <View style={styles.addPanier}>
               <Text style={styles.textAddPanier}>Ajouté au panier</Text>
            </View>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  )
}

export default CourseInfo

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: GlobalStyle.white,
    height: "80%"
  },
  courseImage: {
    width: '100%',
    height: 250,
  },
  courseDetails: {
    padding: 20,
    alignItems: 'center'
  },
  courseDescription: {
    color: GlobalStyle.dimGray,
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 20
  },
  footerContainer:{
    height:"20%",
    backgroundColor:GlobalStyle.white
    
  },
  footerTop:{
    height:"40%",
    alignItems:'flex-end'
  },
  coursePriceWrapper:{
    padding:40,
  },
  coursePriceText:{
    fontSize:20,
    color:GlobalStyle.green,
    paddingHorizontal:30
  },
  footerBottom:{
    height:'60%',
    backgroundColor:GlobalStyle.green,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:30
  },
  addPanier:{
    backgroundColor:GlobalStyle.white,
    borderRadius:25,
    padding:12
  },
  textAddPanier:{
    color:GlobalStyle.green
  }


})