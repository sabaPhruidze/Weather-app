import {ImageSourcePropType} from 'react-native';

export const apiKey = 'c95d7890cc284161a58152316241703';

export interface WeatherImages {
  'Partly Cloudy ': ImageSourcePropType;
  'Partly cloudy': ImageSourcePropType;
  Fog: ImageSourcePropType;
  'Moderate rain': ImageSourcePropType;
  'Patchy rain nearby': ImageSourcePropType;
  Sunny: ImageSourcePropType;
  Clear: ImageSourcePropType;
  'Overcast ': ImageSourcePropType;
  Overcast: ImageSourcePropType;
  Cloudy: ImageSourcePropType;
  'Light rain': ImageSourcePropType;
  'Moderate rain at times': ImageSourcePropType;
  'Light rain shower': ImageSourcePropType;
  'Heavy rain': ImageSourcePropType;
  'Heavy rain at times': ImageSourcePropType;
  'Heavy snow': ImageSourcePropType;
  'Moderate or heavy freezing rain': ImageSourcePropType;
  'Moderate or heavy rain shower': ImageSourcePropType;
  'Moderate or heavy rain with thunder': ImageSourcePropType;
  other: ImageSourcePropType;
}

export const weatherImages: WeatherImages = {
  'Partly Cloudy ': require('../assets/images/partlycloudy.png'),
  'Partly cloudy': require('../assets/images/partlycloudy.png'),
  Fog: require('../assets/images/partlycloudy.png'),
  'Moderate rain': require('../assets/images/moderaterain.png'),
  'Patchy rain nearby': require('../assets/images/moderaterain.png'),
  Sunny: require('../assets/images/sun.png'),
  Clear: require('../assets/images/sun.png'),
  'Overcast ': require('../assets/images/cloud.png'),
  Overcast: require('../assets/images/cloud.png'),
  Cloudy: require('../assets/images/cloud.png'),
  'Light rain': require('../assets/images/moderaterain.png'),
  'Light rain shower': require('../assets/images/moderaterain.png'),
  'Moderate rain at times': require('../assets/images/moderaterain.png'),
  'Heavy rain at times': require('../assets/images/heavyrain.png'),
  'Heavy rain': require('../assets/images/heavyrain.png'),
  'Heavy snow': require('../assets/images/heavyrain.png'),
  'Moderate or heavy freezing rain': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain shower': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain with thunder': require('../assets/images/heavyrain.png'),
  other: require('../assets/images/moderaterain.png'),
};
