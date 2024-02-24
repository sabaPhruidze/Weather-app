import React, {useCallback, useState} from 'react';
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
import {debounce} from 'lodash';
import {Location, HomeScreenProps} from '../screens/HomeScreen';

const Search: React.FC<HomeScreenProps> = ({
  showSearch,
  toggleSearch,
  locations,
  handleLocation,
  handleSearch,
}) => {
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []); //it will not call imeddiatelly the infromation, it will wait 1 second and a bit more in order to give a time user to write which country he or she searches

  return (
    <SafeAreaView style={tw`flex absolute z-50 top-5 right-4 w-full px-3`}>
      <View style={tw`h-20 mx-4  mt-12 w-full`}>
        <View
          style={tw`flex-row justify-end items-center rounded-full ${
            showSearch ? theme.bgWhite(20) : 0
          } `}>
          {showSearch ? (
            <TextInput
              style={tw`pl-6 pb-2 h-10 flex-1 text-base text-white`}
              placeholder="Search city"
              placeholderTextColor={'lightgray'}
              onChangeText={handleTextDebounce}
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
            {locations.map((loc: any, index: number) => {
              let showBorder = index + 1 != locations.length;
              let borderClass = showBorder ? 'border-b-2 border-gray-400' : '';
              return (
                <TouchableOpacity
                  onPress={() => handleLocation(loc)}
                  key={index}
                  style={tw`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}>
                  <MapPinIcon size={20} color="gray" />
                  <Text style={tw`text-black text-lg ml-2`}>
                    {loc?.name}, {loc?.country}
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
