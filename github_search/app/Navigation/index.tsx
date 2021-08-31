import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Serach from '../Screens/Search';

const Stack = createNativeStackNavigator();

const StackNavigation = ()=> (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }
            }>
            <Stack.Screen name="Serach" component={Serach} />
        </Stack.Navigator >
    );

export default StackNavigation;