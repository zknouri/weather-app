import redArrow from '../assets/svg/red-arrow-up.svg'
import greenArrow from '../assets/svg/green-arrow-down.svg'
import { WEATHER_CONDITIONS } from "../lib/constatnts";
import WeatherIcon from './WeatherIcon';

export default function CurrentWeather({weatherData}) {
  const currentWeatherIconName = WEATHER_CONDITIONS[weatherData.weather[0].description]

  return (
    <div className="flex flex-col items-center m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm text-stone-50">
      <p className="text-3xl">{weatherData.name}</p>
      <p className="text-5xl">{weatherData.main.temp} °C</p>
      <p>
        <WeatherIcon slug={currentWeatherIconName}/>
      </p>

      <div className="flex gap-10 m-2">
        {" "}
        <div className="flex flex-col items-center">
          <img src={redArrow} alt="red arrow up" className="w-7" />
          <p className="text-xl font-semibold mt-1">33 °C</p>
        </div>{" "}
        <div className="flex flex-col items-center">
          <img src={greenArrow} alt="green arrow up" className="w-7" />
          <p className="text-xl font-semibold mt-1">24 °C</p>
        </div>
      </div>
    </div>
  );
}
