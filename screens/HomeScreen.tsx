import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {Text, View, StatusBar, ImageBackground} from 'react-native';
import {theme} from '../theme/Index';
import Search from '../parts/Search';
import Forecast from '../parts/Forecast';
import {fetchLocations, fetchWeatherForecast} from '../api/Weather';

export interface HomeScreenProps {
  showSearch: boolean;
  toggleSearch: (value: boolean) => void;
  locations: number[];
  handleLocation: (loc: Location) => void;
  handleSearch: (value: string) => void;
  weather?: any;
}
export interface Location {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}
const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState<boolean>(false);
  const [locations, setLocations] = useState<number[]>([]);
  const [weather, setWeather] = useState({});

  const handleLocation = (loc: Location) => {
    console.log('location', loc);
    setLocations([]);
    toggleSearch(false);
    fetchWeatherForecast({
      cityName: loc.name,
      days: 7,
    }).then(data => {
      setWeather(data);
      console.log('got data', data);
    });
  };

  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({cityName: value}).then(data => {
        setLocations(data);
      });
    }
  };
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
        <Search
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          locations={locations}
          handleLocation={handleLocation}
          handleSearch={handleSearch}
        />
        <Forecast
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          locations={locations}
          handleLocation={handleLocation}
          handleSearch={handleSearch}
          weather={weather}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
