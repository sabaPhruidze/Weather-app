import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {Text, View, StatusBar, ImageBackground} from 'react-native';
import {theme} from '../theme/Index';
import Search from '../parts/Search';
import Forecast from '../parts/Forecast';
import {fetchLocations, fetchWeatherForecast} from '../api/Weather';

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
}

interface CurrentWeather {
  location: Location;
  current: Current;
  forecast: any;
}

export interface HomeScreenProps {
  showSearch: boolean;
  toggleSearch: (value: boolean) => void;
  locations: number[];
  handleLocation: (loc: Location) => void;
  handleSearch: (value: string) => void;
  weather?: CurrentWeather;
}

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState<boolean>(false);
  const [locations, setLocations] = useState<number[]>([]);
  const [weather, setWeather] = useState<CurrentWeather>({
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      tz_id: 'Europe/London',
      localtime_epoch: 1710690456,
      localtime: '2024-03-17 15:47',
    },
    current: {
      last_updated_epoch: 1710690300,
      last_updated: '2024-03-17 15:45',
      temp_c: 13.5,
      temp_f: 56.3,
      is_day: 1,
      condition: {
        text: 'Patchy rain nearby',
        icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
        code: 1063,
      },
    },
    forecast: {
      fe: 'fe',
    },
  });

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
