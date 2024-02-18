import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Text, View, StatusBar, ImageBackground} from 'react-native';
import {theme} from '../theme/Index';
import Search from '../parts/Search';
import Forecast from '../parts/Forecast';
const HomeScreen = () => {
  return (
    <View style={tw`flex-1 relative z-10`}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={tw`absolute w-full h-full`}
        blurRadius={70}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Search />
        <Forecast />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
