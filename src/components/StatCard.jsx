import humidity from "@meteocons/svg/fill/humidity.svg";
import wind from "@meteocons/svg/fill/wind.svg";
import pressureHigh from "@meteocons/svg/fill/pressure-high.svg";

export default function StatCard() {
  return (
    <>
      <div className="p-1 m-1 size-32 bg-sky-400 rounded-md text-stone-50  font-semibold">
        <p className="text-xl">Humidity</p>
        <div className="flex items-center relative h-1/2">
          <p className="">50%</p>
          <img
            src={humidity}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
        </div>
      </div>
      <div className="p-1 m-1 size-32 bg-sky-400 rounded-md text-stone-50  font-semibold ">
        <p className="text-xl">Wind</p>
        <div className="flex items-center relative h-1/2">
        <img
            src={wind}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
          <p className="">13 km/h</p>
          
        </div>
      </div>
      <div className="p-1 m-1 size-32 bg-sky-400 rounded-md text-stone-50  font-semibold ">
        <p className="text-xl">Pressure</p>
        <div className="flex items-center relative h-1/2">
        <img
            src={pressureHigh}
            alt="humidity logo"
            className="size-24 absolute -right-4 top-2 "
          />
          <p className="">1010 hpa</p>
          
        </div>
      </div>
    </>
  );
}
