import {View, Text, ScrollView, Dimensions, Platform, TouchableOpacity, Image} from "react-native";
import {styles} from "../theme";
import {ChevronLeftIcon, HeartIcon} from "react-native-heroicons/outline";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import MovieList from "../components/MovieList";

var {width, height} = Dimensions.get('window')
const ios = Platform.OS === 'ios'
const verticalMargin = ios ? 'my-5' : 'my-5'
const PersonScreen = () => {
    const navigation = useNavigation()
    const [isFavorite, toggleFavourite] = useState(false)
    return (
        <ScrollView
            className="flex-1 bg-neutral-900"
            contentContainerStyle={{paddingBottom: 20}}
        >
        <SafeAreaView className={"px-4 z-20 w-full flex-row justify-between items-center " + verticalMargin}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.background}
                    className="rounded-xl p-1"
                >
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavorite)}>
                    <HeartIcon size="28" strokeWidth={2.5} color={isFavorite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            <View>
                <View className="flex-row justify-center"
                      // style={{
                      //     shadowColor: 'gray',
                      //     shadowRadius: 40,
                      //     shadowOffset:  {width: 0, height: 5},
                      //     shadowOpacity: 1
                      // }}
                >
                    <View className="items-center w-72 h-72 rounded-full border-2 border-neutral-500 overflow-hidden">
                        <Image source={{uri: 'https://media.licdn.com/dms/image/D5603AQHvy8jlctURXQ/profile-displayphoto-shrink_400_400/0/1673376244664?e=1698883200&v=beta&t=zufnOPM8HYi7WPTpU_zYhntFmENsLE6aa3PYv6VIDrQ'}}
                               style={{width: width*.74, height: height*0.43}}
                               className=""
                        />
                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-[24px] leading-8 text-white font-bold text-center">Mohaimen Khalid</Text>
                    <Text className="text-base leading-8 text-neutral-400 text-center">Software Engineer</Text>
                </View>

                <View className="mx-3 p-4 mt-6 flex-row justify-center items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">22-12-1995</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known For</Text>
                        <Text className="text-neutral-300 text-sm">SE</Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popilarity</Text>
                        <Text className="text-neutral-300 text-sm">65.44</Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-[24px] leading-8">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        I am a software developer with industry experience building websites and web applications. I have professional experience working with Frontend & Backend technology. I have experience working with PHP, Laravel, JavaScript, ReactJS, VueJS, NextJS, NuxtJS, Angular. Also love building styled & responsive component with CSS, SCSS, HTML, Bootstrap, Tailwind, JavaScript.

                        Currently I’m working as a Lead Software Engineer (Frontend Lead) with the amazing team at Jatri.

                        Skills/Interests: JavaScript, Reactjs, Vuejs, Nuxtjs, Nextjs, Angular, PHP, Laravel, RESTful API, ES6, Bootstrap, Tailwind, Styled Component, CSS, HTML, JSON, Git, MySQL
                    </Text>
                </View>

                <MovieList title="Movies" showSeeAll={false} data={[1, 2, 3, 4]} />
            </View>
        </ScrollView>
    )
}

export default PersonScreen