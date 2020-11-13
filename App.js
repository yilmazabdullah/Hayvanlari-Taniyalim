import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Anasayfa from './Components/Anasayfa';
import Detaylar from './Components/Detaylar';

const Stack = createStackNavigator();
function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Anasayfa">
				<Stack.Screen name="Anasayfa" component={Anasayfa} />
				<Stack.Screen name="Detaylar" component={Detaylar} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
