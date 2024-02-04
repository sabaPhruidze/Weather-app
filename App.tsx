import React from 'react';
import tailwind from 'tailwind-react-native-classnames';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={tailwind`text-red-500`}>efe</Text>
    </View>
  );
}

export default App;
