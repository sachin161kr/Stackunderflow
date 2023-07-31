import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ReactNavigator, NativeNavigator, NodeNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="React JS" component={ReactNavigator} />
      <Tab.Screen name="React Native" component={NativeNavigator} />
      <Tab.Screen name="Node JS" component={NodeNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
