import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpalshScreen from '../Screens/SpalshScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={'SpalshScreen'}>
      <Stack.Screen
        name={'SpalshScreen'}
        component={SpalshScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'TabNavigation'}
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
