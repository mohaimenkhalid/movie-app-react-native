import {View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Platform} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon, HeartIcon} from "react-native-heroicons/outline";
import {styles} from "../theme";
import { LinearGradient } from 'expo-linear-gradient';
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";


var {width, height} = Dimensions.get('window')
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3'
const MovieDetailsScreen = () => {
    const {params: item} = useRoute()
    const navigation = useNavigation()
    const [cast, setCast] = useState([1, 2, 3, 4])
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4])
    useEffect(() => {
        //call api
    }, [item])
    return (
        <ScrollView
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                <SafeAreaView className={"px-4 absolute z-20 w-full flex-row justify-between items-center "+topMargin}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.background}
                        className="rounded-xl p-1"
                    >
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <HeartIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                </SafeAreaView>

                <View>
                    <Image source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg'}}
                           style={{width: width, height: height*0.55}}
                           className=""
                    />
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={{width, height: height*0.4}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        className="absolute bottom-0"
                    />
                </View>
            </View>
            <View style={{marginTop: -(height*0.09)}}>
                <Text className="text-white text-center text-[24px] leading-8 font-bold tracking-wider">
                    Indiana Jones and the Dial of Destiny (2023)
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Release . 2020 . 170 min
                </Text>

                <View className="flex-row justify-center mx-4 space-x-2 mb-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy
                    </Text>
                </View>

                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.
                </Text>
            </View>

            <Cast cast={cast} navigation={navigation} />

            <MovieList showSeeAll={false} title='Similar Movies' data={similarMovies} />
        </ScrollView>
    )
}

export default MovieDetailsScreen;