export const apiKey = 'c95d7890cc284161a58152316241703';

export interface WeatherImages {
  'Partly Cloudy ': string;
  'Moderate rain': string;
  'Patchy rain nearby': string;
  Sunny: string;
  Clear: string;
  'Overcast ': string;
  Cloudy: string;
  'Light rain': string;
  'Moderate rain at times': string;
  'Light rain shower': string;
  'Heavy rain': string;
  'Heavy rain at times': string;
  'Moderate or heavy freezing rain': string;
  'Moderate or heavy rain shower': string;
  'Moderate or heavy rain with thunder': string;
  other: string;
}

export const weatherImages: WeatherImages = {
  'Partly Cloudy ': require('../assets/images/partlycloudy.png'),
  'Moderate rain': require('../assets/images/moderaterain.png'),
  'Patchy rain nearby': require('../assets/images/moderaterain.png'),
  Sunny: require('../assets/images/sun.png'),
  Clear: require('../assets/icons/sun.png'),
  'Overcast ': require('../assets/images/cloud.png'),
  Cloudy: require('../assets/images/cloud.png'),
  'Light rain': require('../assets/images/moderaterain.png'),
  'Light rain shower': require('../assets/images/moderaterain.png'),
  'Moderate rain at times': require('../assets/images/moderaterain.png'),
  'Heavy rain at times': require('../assets/images/heavyrain.png'),
  'Heavy rain': require('../assets/images/heavyrain.png'),
  'Moderate or heavy freezing rain': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain shower': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain with thunder': require('../assets/images/heavyrain.png'),
  other: require('../assets/images/moderaterain.png'),
};
