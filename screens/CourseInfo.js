import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux'

const CourseInfo = ({navigation,route}) => {
    const courseId = route.params.courseId
    const selectedCourse =useSelector(state=>state.courses.existingCourses.find(course => course.id===courseId));
    useEffect(() => {
        navigation.setOptions({
            title:selectedCourse.title,
        })
        
    }, [navigation])
    
    return (
    <View>
      <Text>{courseId}</Text>
    </View>
  )
}

export default CourseInfo

const styles = StyleSheet.create({})