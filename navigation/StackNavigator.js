import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import ReactHome from '../screens/reactjs/ReactHome';
import NodeHome from '../screens/node/NodeHome';
import NativeHome from '../screens/native/NativeHome';

const ReactNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReactHome"
        component={ReactHome}
        options={{
          headerShown: true,
          title : "Hot Questions for React JS !!!"
        }}
      />
    </Stack.Navigator>
  );
};

const NativeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NativeHome"
        component={NativeHome}
        options={{
          headerShown: true,
          title : "Hot Questions for React Native !!!"
        }}
      />
    </Stack.Navigator>
  );
};

const NodeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NodeHome"
        component={NodeHome}
        options={{
          headerShown: true,
          title : "Hot Questions for Node JS !!!"
        }}
      />
    </Stack.Navigator>
  );
};

export {ReactNavigator, NativeNavigator, NodeNavigator};
