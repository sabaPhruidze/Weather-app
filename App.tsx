import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {theme} from './theme/Index';
import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <View style={tw`flex-1 relative`}>
      <HomeScreen />
    </View>
  );
}

export default App;
