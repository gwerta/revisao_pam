import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Teladog from './screens/TelaDog';
import Telalogin from './screens/TelaLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teladog">
        <Stack.Screen name="Teladog" component={Teladog} options={{ headerShown: false }} />
        <Stack.Screen name="Telalogin" component={Telalogin}  options={{headerTitle: '', headerTintColor: '#10eb4b', headerShadowVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}