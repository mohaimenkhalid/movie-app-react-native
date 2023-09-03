import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import PersonScreen from "./src/screens/PersonScreen";
import SearchScreen from "./src/screens/SearchScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "rgba(38, 38, 38, 1)",
                    // width: 240,
                },
            }}
        >
            <Drawer.Screen name="Home" options={{headerShown: false}} component={HomeScreen}  />
        </Drawer.Navigator>
    );
}

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
                <Stack.Screen name="MovieDetails" options={{headerShown: false}} component={MovieDetailsScreen} />
                <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
                <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default AppNavigation;