import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CourseInfo from './CourseInfo';
import EmptyMsg from '../components/EmptyMsg';
import CoursesInCart from '../components/CoursesInCart';
import GlobalStyle from '../styles/GlobalStyle';

const Card = () => {
  const cartCourses = useSelector(state => state.cart.cartCourses);
  const total = useSelector(state => state.cart.total);
  return (
    <View style={styles.cartContainer}>
      {
        cartCourses.length > 0 ? (
          <View>
             <FlatList 
              data={cartCourses}
              keyExtractor={item => item.id}
              renderItem={() => (
                <CoursesInCart
                title={item.title}
                price={item.price}
                onDelete={()=>alert('clique supprimé')}
                />
              )}
             />
             <View style={styles.totalCart}>
                <Text style={styles.totlText}>
                  Total : 
                  <Text style={styles.totlPrice}>{total} MAD</Text>
                </Text>
            </View>
            <TouchableOpacity>
                <View style={styles.paidContainer}>
                    <Text>Payer</Text>
                </View>
            </TouchableOpacity>
          </View>
          
        ) : (
          <EmptyMsg text="Panier vide" />
        )
      }
     
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cartContainer:{
    margin:20,
  },
  totalCart:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:19
  },
  totlText:{
    fontWeight:'bold',
    fontSize:19
  },
  totlPrice:{
    color:GlobalStyle.green
  },
  paidContainer:{
    backgroundColor:GlobalStyle.green,
    padding:12,
    borderRadius:12
  }
})