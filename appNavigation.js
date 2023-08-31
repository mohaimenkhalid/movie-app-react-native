import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
                <Stack.Screen name="MovieDetails" options={{headerShown: false}} component={MovieDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;