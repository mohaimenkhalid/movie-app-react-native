import {View, Text, ScrollView, TouchableOpacity} from "nativewind/dist/preflight";
import {Image} from "react-native";

const Cast = ({cast}) => {
    const personName = "Jon Weak"
    const characterName = "Jon Weak Abrar"
    return (
        <View className="my-6">
            <Text className="text-white text-[18px] leading-7 mx-4 mb-5">
                Top Cast
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className="mr-4 items-center"
                            >
                               <View className="w-20 h-20 rounded-full overflow-hidden border border-neutral-500 mb-2">
                                   <Image source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg'}}
                                          className="w-20 h-20"
                                   />
                               </View>
                                <Text className="text-white text-xs">
                                    {personName.length > 10 ? personName.slice(0, 10)+'...' : personName}
                                </Text>
                                <Text className="text-neutral-400 text-xs">
                                    {characterName.length > 10 ? characterName.slice(0, 10)+'...' : characterName}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Cast