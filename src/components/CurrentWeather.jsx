import clearDay from "@meteocons/svg/fill/clear-day.svg";
import redArrow from "../assets/svg/red-arrow-up.svg";
import greenArrow from "../assets/svg/green-arrow-down.svg";

export default function CurrentWeather() {
  return (
    <div className="flex flex-col items-center m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm text-stone-50">
      <p className="text-3xl">Casablanca</p>
      <p className="text-6xl">32 °C</p>
      <p>
        <img src={clearDay} alt="Clear day" className="size-20" />
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
