import {Dimensions, Text, View, Image} from "react-native";
import Carousel from "react-native-snap-carousel";
import {TouchableWithoutFeedback} from "nativewind/dist/preflight";
import {useNavigation} from "@react-navigation/native";
var {width, height} = Dimensions.get('window')

const TrendingMovies = ({trending}) => {
    const navigation = useNavigation()
    const handleClick = (item) => {
        navigation.navigate('MovieDetails', item)
    }
  return (
      <View className="mb-8">
          <Text className="text-white text-xl mx-4 mb-5">
              Trending movies
          </Text>
          <Carousel
              data={trending}
              renderItem={({item, index}) => <MovieCard item={item} handleClick={() => handleClick(item)} />}
              firstItem={1}
              sliderWidth={width}
              itemWidth={width*0.65}
              slideStyle={{display: 'flex', alignItems: 'center'}}
          />
      </View>
  )
}

const MovieCard = ({item, handleClick}) => {
  return (
      <TouchableWithoutFeedback onPress={handleClick}>
          <Image source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg'}}
                 style={{width: width*0.6, height: height*0.5}}
                 className="rounded-3xl"
          />
      </TouchableWithoutFeedback>
  )
}

export default TrendingMovies