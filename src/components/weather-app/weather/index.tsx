import { WeartherData } from '../WeatherApp';

interface WeathterProps {
  weather: WeartherData;
}

const Weather = ({ weather }: WeathterProps) => {
  return (
    <div>
      <h1>{weather.name} city</h1>
      <div className='temp-container'>
        <p className='temperature'>Temperature: {weather.main.temp}</p>
        <p className='temperature'>Feels like: {weather.main.feels_like}</p>
      </div>
      <p className='description'>{weather.weather[0].description}</p>
      <p className='wind'>Wind: {weather.wind.speed}</p>
    </div>
  );
};
export default Weather;
