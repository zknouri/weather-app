import WeatherIcon from "./WeatherIcon.jsx";

export default function ForecastCard({ day, time, slug, temperature }) {
  return (
    <div className={`flex flex-col items-center p-1 m-1 min-h-32 min-w-22 w-22 border-2 rounded-md text-stone-50 font-semibold`}>
      <p className="text-xl">{day.slice(0, 3).toUpperCase()}</p>
      <p>{time}</p>
      <WeatherIcon slug={slug} className="size-20" />
      <p>{temperature}</p>
    </div>
  );
}
