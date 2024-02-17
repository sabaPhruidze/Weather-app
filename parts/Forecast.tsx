import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Forecast = () => {
  const SameStyle = 'text-center font-bold text-white';
  return (
    <View style={tw`mx-4 flex justify-around flex-1 mb-2`}>
      <Text style={tw`text-white text-center text-2xl font-bold`}>
        London,{' '}
        <Text style={tw`text-lg font-semibold text-gray-300`}>
          United Kingdom
        </Text>
      </Text>
      {/* Wether image */}
      <View style={tw` flex-row justify-center`}>
        <Image
          source={require('../assets/images/partlycloudy.png')}
          style={tw`w-52 h-52`}
        />
      </View>
      <View style={tw`my-2`}>
        <Text style={tw` text-4xl ml-5 ${SameStyle}`}>23&#176;</Text>
        <Text style={tw`${SameStyle} text-xl ml-5 tracking-widest`}>
          Partly cloudy
        </Text>
      </View>
    </View>
  );
};

export default Forecast;
