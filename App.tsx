import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Text, View, StatusBar, Image, ImageBackground} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={tw`flex-1 relative`}>
      <ImageBackground
        source={require('./assets/images/bg.png')}
        style={tw`absolute w-full h-full`}
        blurRadius={70}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
      </ImageBackground>
    </View>
  );
}

export default App;
