import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import { HeaderButton,HeaderButtons,Item } from "react-navigation-header-buttons";
import Landing from '../screens/Landing';
import Card from '../screens/Card';
import CourseInfo from '../screens/CourseInfo';
import GlobalStyle from "../styles/GlobalStyle";
import CUstomHeaderIcon from "../components/CUstomHeaderIcon";

const CoursesStackNavigator = createStackNavigator();

export const CousesNavigator = () => {
    return (
    <CoursesStackNavigator.Navigator 
    screenOptions={
        ({navigation})=>(
            {
                headerStyle:{backgroundColor:GlobalStyle.green},
                headerTitleStyle:{fontWeight:'bold'},
                headerTintColor:GlobalStyle.white,
                headerRight: ()=>(
                    <HeaderButtons HeaderButtonComponent={CUstomHeaderIcon}>
                        <Item
                            title="Panier"
                            iconName="shopping-cart"
                            onPress={()=>navigation.navigate('Card')}
                        />
                    </HeaderButtons>
                )
            }
        )
    }
    >
        <CoursesStackNavigator.Screen name="Landing" component={Landing} />
        <CoursesStackNavigator.Screen name="Card" component={Card} />
        <CoursesStackNavigator.Screen name="Details" component={CourseInfo} />
    </CoursesStackNavigator.Navigator>
    );

}