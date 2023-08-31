import {Platform, Text, View} from "react-native";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {ScrollView, TouchableOpacity} from "nativewind/dist/preflight";
import {styles} from "../theme";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";

const ios = Platform.OS === 'ios'
function HomeScreen() {
    const [trending, setTrending] = useState([1, 2, 3, 4])
    const [upcoming, setUpcoming] = useState([1, 2, 3, 4])
    const [topRated, setTopRated] = useState([1, 2, 3, 4])
    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center px-2 py-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className="text-white text-4xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {/*Trending movies*/}
            <ScrollView>
                <TrendingMovies trending={trending} />
                <MovieList title={'Upcoming'} data={upcoming} />
                <MovieList title={'Top Rated'} data={topRated} />
            </ScrollView>
        </View>
    );
}

export default HomeScreen