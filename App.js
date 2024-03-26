import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Badge,Button } from '@rneui/themed';
import {AntDesign} from 'react-native-vector-icons'
import Landing from './components/Landing';
import Alternate from './components/Alternate'
import LoadingScreenOne from './components/LoadingScreenOne'
import IntroScreen from './components/IntroScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="IntroScreen" 
screenOptions={
  {
  headerStyle:{backgroundColor:'lightblue'},
  headerTintColor:'white',
  headerBackTitleStyle:{fontWeight:'bold'},
  headerShown:false
}
  }>
<Stack.Screen name='IntroScreen' component={IntroScreen}/>
<Stack.Screen name='LoadingScreenOne' component={LoadingScreenOne}/>
<Stack.Screen name='Landing' component={Landing}/>
<Stack.Screen name='Alternate' component={Alternate}/>

</Stack.Navigator>
</NavigationContainer>

  );
}
