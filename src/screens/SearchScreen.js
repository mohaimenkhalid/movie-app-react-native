import {View, Text, ScrollView, TextInput, TouchableOpacity, Image, Dimensions, Platform} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context";
import {XMarkIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {TouchableWithoutFeedback} from "nativewind/dist/preflight";

const ios = Platform.OS === 'ios'
const marginTop = ios ? 'mt-3' : ''
const SearchScreen = () => {
    const navigation = useNavigation()
    var {width, height} = Dimensions.get('window')
    const movieName = "Movie name heare"
    const [searchResults, setSearchResults] = useState([1, 2, 3, 4, 5])
    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView>
                <View className={'mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full '+marginTop}>
                    <TextInput
                        placeholder="Search Movie"
                        placeholderTextColor={'lightgray'}
                        className="py-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                        style={{color: 'lightgray'}}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="rounded-full p-3 m-1 bg-neutral-500"
                    >
                        <XMarkIcon size="25" color="white" />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    showVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal: 15}}
                    className="space-y-3"
                >
                    <Text className="text-white">
                        Results ({searchResults.length})
                    </Text>
                    {
                        searchResults.length ? (
                            <View className="flex-row justify-between flex-wrap">
                                {
                                    searchResults.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => handleClick(item)}
                                            >
                                                <View className="space-y-2 mb-4">
                                                    <Image
                                                        source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg'}}
                                                        style={{width: width * 0.44, height: height * 0.3}}
                                                        className="rounded-2xl"
                                                    />
                                                    <Text className="text-neutral-300 ml-1">
                                                        {movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName}
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        )
                            :
                            (
                                <View className="mb-4 flex-row justify-center">
                                    <Image
                                        source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/502/524/small/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg'}}
                                        style={{width: width *0.95, height: height * 0.3,}}
                                        className="rounded-2xl"
                                    />
                                </View>
                            )
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default SearchScreen