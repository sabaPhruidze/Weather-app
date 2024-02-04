import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {theme} from '../theme/Index';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
const Search = () => {
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <View style={tw`h-20 mx-4 relative z-50 mt-12`}>
        <View
          style={tw`flex-row justify-end items-center rounded-full ${theme.bgWhite(
            20,
          )} `}>
          <TextInput
            style={tw`pl-6 h-10 flex-1 text-base text-white`}
            placeholder="Search city"
            placeholderTextColor={'lightgray'}
          />
          <TouchableOpacity
            style={tw`${theme.bgWhite(30)} rounded-full p-3 m-1`}>
            {/* <MagnifyingGlassIcon size={25} color="white" /> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
