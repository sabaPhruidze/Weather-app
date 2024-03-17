export const apiKey = 'c95d7890cc284161a58152316241703';

export interface WeatherImages {
  'Partly Cloudy ': string;
  'Partly cloudy': string;
  Fog: string;
  'Moderate rain': string;
  'Patchy rain nearby': string;
  Sunny: string;
  Clear: string;
  'Overcast ': string;
  Overcast: string;
  Cloudy: string;
  'Light rain': string;
  'Moderate rain at times': string;
  'Light rain shower': string;
  'Heavy rain': string;
  'Heavy rain at times': string;
  'Heavy snow': string;
  'Moderate or heavy freezing rain': string;
  'Moderate or heavy rain shower': string;
  'Moderate or heavy rain with thunder': string;
  other: string;
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
