import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Text, View, StatusBar, Image} from 'react-native';
function App(): React.JSX.Element {
  return (
    <View style={tw`flex-1 relative`}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('./assets/images/bg.png')}
        style={tw`absolute h-full w-full`}
      />
    </View>
  );
}

export default App;
