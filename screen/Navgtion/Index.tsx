import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from '../Login';
const Stack = createStackNavigator();

const Navgtion = ()=>{
    return(
        <>
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
     
      </Stack.Navigator>
    </NavigationContainer>
        </>
    )
}
export default Navgtion