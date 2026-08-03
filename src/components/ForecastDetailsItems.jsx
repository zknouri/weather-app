import WeatherIcon from "./WeatherIcon";

export default function ForecastDetailsItem({ slug, name, value, unit = ''}) {
  return (
    <div className="flex flex-col text-center items-center border-2 rounded-md w-37 p-1 m-1">
      <p className="">{name}</p>
      <div className="grid grid-cols-3 items-center">
        <WeatherIcon
          slug={slug}
          className="size-10"
        />
        <p className="col-span-2 text-sm">{value} {unit}</p>
      </div>
    </div>
  );
}
