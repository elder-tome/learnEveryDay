import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './screens/login';
import createLogin from './screens/createLogin';

const stack = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name='login' component={login}/>
        <stack.Screen name='createLogin' component={createLogin}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;