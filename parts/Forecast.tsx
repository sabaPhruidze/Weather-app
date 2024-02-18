import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {CalendarDaysIcon} from 'react-native-heroicons/outline';
import {theme} from '../theme/Index';
const Forecast = () => {
  const SameStyle = 'text-center font-bold text-white';
  return (
    <View
      style={tw`mx-4 flex justify-around flex-1 mb-2 absolute z-10 top-40 left-0`}>
      <Text style={tw`text-white text-center text-2xl font-bold`}>
        London,{' '}
        <Text style={tw`text-lg font-semibold text-gray-300`}>
          United Kingdom
        </Text>
      </Text>
      {/* Wether image */}
      <View style={tw` flex-row justify-center mt-10`}>
        <Image
          source={require('../assets/images/partlycloudy.png')}
          style={tw`w-52 h-52`}
        />
      </View>
      <View style={tw`my-4 mt-10`}>
        <Text style={tw` text-4xl ml-5 ${SameStyle}`}>23&#176;</Text>
        <Text style={tw`${SameStyle} text-xl ml-5 tracking-widest`}>
          Partly cloudy
        </Text>
      </View>
      <View style={tw`flex-row justify-between mx-4 mt-10`}>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require('../assets/icons/wind.png')}
            style={tw`h-6 w-6 mx-2`}
          />
          <Text style={tw`text-white font-semibold text-base`}>22km</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require('../assets/icons/drop.png')}
            style={tw`h-6 w-6 mx-2`}
          />
          <Text style={tw`text-white font-semibold text-base`}>23%</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require('../assets/icons/sun.png')}
            style={tw`h-6 w-6 mx-2`}
          />
          <Text style={tw`text-white font-semibold text-base`}>6:05 AM</Text>
        </View>
      </View>
      <View style={tw`mb-2 my-3`}>
        <View style={tw`flex-row items-center mx-5 mx-2 mt-2`}>
          <CalendarDaysIcon size={22} color="white" />
          <Text style={tw`text-white text-base`}> Daily forecast</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 0, marginVertical: 10}}
          showsHorizontalScrollIndicator={false}>
          <View
            style={tw`flex justify-center items-center w-24 rounded-3xl py-3 my-1 mr-4 ${theme.bgWhite(
              20,
            )}`}>
            <Image
              source={require('../assets/images/heavyrain.png')}
              style={tw`h-11 w-11`}
            />
            <Text style={tw`text-white`}>Monday</Text>
            <Text style={tw`text-white text-xl font-semibold`}>13&#176;</Text>
          </View>
          <View
            style={tw`flex justify-center items-center w-24 rounded-3xl py-3 my-1 mr-4 ${theme.bgWhite(
              20,
            )}`}>
            <Image
              source={require('../assets/images/heavyrain.png')}
              style={tw`h-11 w-11`}
            />
            <Text style={tw`text-white`}>Tuesday</Text>
            <Text style={tw`text-white text-xl font-semibold`}>13&#176;</Text>
          </View>
          <View
            style={tw`flex justify-center items-center w-24 rounded-3xl py-3 my-1 mr-4 ${theme.bgWhite(
              20,
            )}`}>
            <Image
              source={require('../assets/images/heavyrain.png')}
              style={tw`h-11 w-11`}
            />
            <Text style={tw`text-white`}>Monday</Text>
            <Text style={tw`text-white text-xl font-semibold`}>13&#176;</Text>
          </View>
          <View
            style={tw`flex justify-center items-center w-24 rounded-3xl py-3 my-1 mr-4 ${theme.bgWhite(
              20,
            )}`}>
            <Image
              source={require('../assets/images/heavyrain.png')}
              style={tw`h-11 w-11`}
            />
            <Text style={tw`text-white`}>Monday</Text>
            <Text style={tw`text-white text-xl font-semibold`}>13&#176;</Text>
          </View>
          <View
            style={tw`flex justify-center items-center w-24 rounded-3xl py-3 my-1 mr-4 ${theme.bgWhite(
              20,
            )}`}>
            <Image
              source={require('../assets/images/heavyrain.png')}
              style={tw`h-11 w-11`}
            />
            <Text style={tw`text-white`}>Monday</Text>
            <Text style={tw`text-white text-xl font-semibold`}>13&#176;</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Forecast;
