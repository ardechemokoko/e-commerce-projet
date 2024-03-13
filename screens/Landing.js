import { View, Text, FlatList, Alert } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CourseItems from '../components/CourseItems';
import EmptyMsg from '../components/EmptyMsg';

export default function UserCouses({navigation}) {
  const state =useSelector(state=>state.courses.existingCourses);
  if(state.length){
    return (
      <View>
        <FlatList
          data={state}
          renderItem={({item}) => 
          (<CourseItems
           image={item.image}
           title={item.title}
           price={item.price}
           viewDetail={()=>navigation.navigate('Details',{
            courseId:item.id
           })}
           addToCard={()=>alert('pannier')}
          />)
        }
        />
      </View>
    )
  }
  else{
    return <EmptyMsg 
    text="Aucun cours n'est disponible"
    />
  }
  
}