import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import GlobalStyle from '../styles/GlobalStyle'

const CourseInfo = ({ navigation, route }) => {
  const courseId = route.params.courseId
  const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId));
  useEffect(() => {
    navigation.setOptions({
      title: selectedCourse.title,
    })

  }, [navigation])

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
          <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePriceText}>{selectedCourse.price}</Text>
          </View>
        </View>
        <View style={styles.footerBottom}></View>

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
    fontSize:24,
    color:'red'
  },
  footerBottom:{
    height:'60%'
  }


})