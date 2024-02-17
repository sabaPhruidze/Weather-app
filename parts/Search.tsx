import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {theme} from '../theme/Index';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
const Search = () => {
  const [showSearch, toggleSearch] = useState<boolean>(false);
  const [locations, setLocations] = useState<number[]>([1, 2, 3]);
  const handleLocation = (loc: number) => {
    console.log('location', loc);
  };
  return (
    <SafeAreaView style={tw`flex`}>
      <View style={tw`h-20 mx-4 relative z-50 mt-12`}>
        <View
          style={tw`flex-row justify-end items-center rounded-full ${
            showSearch ? theme.bgWhite(20) : 0
          } `}>
          {showSearch ? (
            <TextInput
              style={tw`pl-6 pb-2 h-10 flex-1 text-base text-white`}
              placeholder="Search city"
              placeholderTextColor={'lightgray'}
            />
          ) : null}
          <TouchableOpacity
            onPress={() => toggleSearch(!showSearch)}
            style={tw`${theme.bgWhite(30)} rounded-full p-3 m-1`}>
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        {locations.length > 0 && showSearch ? (
          <View style={tw`absolute w-full bg-gray-300 top-16 rounded-3xl`}>
            {locations.map((loc, index) => {
              let showBorder = index + 1 != locations.length;
              let borderClass = showBorder ? 'border-b-2 border-gray-400' : '';
              return (
                <TouchableOpacity
                  onPress={() => handleLocation(loc)}
                  key={index}
                  style={tw`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}>
                  <MapPinIcon size={20} color="gray" />
                  <Text style={tw`text-black text-lg ml-2`}>
                    London, United Kingdom
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Search;
