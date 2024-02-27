import { useCallback, useEffect, useState } from 'react';
import Search from './search';
import Weather from './weather';
import './styles.css';

export interface WeartherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherApp = () => {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeartherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (params: string) => {
    try {
      setError(null);
      setLoading(true);
      const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=cb6b0dcf2866b8bcf6bc0b487dac1f9f
      `);

      if (!response.ok) {
        setError('Enter correct city name');
        return;
      }
      const data: WeartherData = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      setError('Enter correct city name');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback(() => {
    fetchWeather(search);
    setSearch('');
  }, [fetchWeather, search]);

  useEffect(() => {
    fetchWeather('moscow');
  }, []);

  return (
    <div className='weather-app'>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading && <h2>Loading</h2>}
      {error && <h2>{error}</h2>}
      {weatherData && <Weather weather={weatherData} />}
    </div>
  );
};
export default WeatherApp;
