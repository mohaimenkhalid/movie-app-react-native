import {View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions} from "react-native";
import {styles} from "../theme";
import {useNavigation} from "@react-navigation/native";

var {width, height} = Dimensions.get('window')

const MovieList = ({title, data}) => {
    const navigation = useNavigation()
    const handleClick = (item) => {
        navigation.navigate('MovieDetails', item)
    }
    const movieName = "Inoana Jordana Indonetia text"
  return (
      <View classname="mb-8 space-y-4">
          <View className="mx-4 flex-row justify-between items-center">
              <Text className="text-white text-xl">{title}</Text>
              <TouchableOpacity>
                  <Text className="text-[18px] leading-7" style={styles.text}>See All</Text>
              </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding: 15}}
          >
              {
                  data.map((item, index) => {
                      return (
                          <TouchableWithoutFeedback
                              key={index}
                              onPress={() => handleClick(item)}
                          >
                                <View className="space-y-2 mr-4">
                                    <Image source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg'}}
                                           style={{width: width*0.32, height: height*0.22}}
                                           className="rounded-2xl"
                                    />
                                    <Text className="text-neutral-300 ml-1">
                                        {movieName.length > 14 ? movieName.slice(0, 14)+'...' : movieName}
                                    </Text>
                                </View>
                          </TouchableWithoutFeedback>
                      )
                  })
              }
          </ScrollView>
      </View>
  )
}

export default MovieList