import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Description from '../screens/Description';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import UniversityList from '../screens/UniversityList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="University" component={UniversityList} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
