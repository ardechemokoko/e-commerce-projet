import { View, Text, FlatList, Alert } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CourseItems from '../components/CourseItems';
import EmptyMsg from '../components/EmptyMsg';
import addToCart from '../redux/action/actionAddToCart';

export default function UserCouses({navigation}) {

  const state =useSelector(state=>state.courses.existingCourses);
  const courseToDisplay = state.filter(course=>course.selected==false);
  const dispatch = useDispatch();

  const handleAddToCart = (course) =>{
    dispatch(addToCart(course));
    alert('article ajouté');

  }


  if(courseToDisplay.length){
    return (
      <View>
        <FlatList
          data={courseToDisplay}
          renderItem={({item}) => 
          (<CourseItems
           image={item.image}
           title={item.title}
           price={item.price} 
           viewDetail={()=>navigation.navigate('Details',{
            courseId:item.id
           })}
           addToCard={()=>handleAddToCart(item)}
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