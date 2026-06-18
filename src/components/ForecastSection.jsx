import ForecastCard from "./ForecastCard";

export default function ForecastSection() {
  return (
    <div className="grid grid-cols-3 items-center m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm text-stone-50">
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
}
