import react from "react";
import { CousesNavigator } from "./CoursesStackNavigator";
import { NavigationContainer } from "@react-navigation/native";


const AppNav = ()=>{
    return(
        <NavigationContainer>
            <CousesNavigator />
        </NavigationContainer>
    );
}

export default AppNav;