import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';
import { ScrollView } from 'react-native';

const App = () => {
  return (
     <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
