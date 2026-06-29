import weatherLogo from "../assets/svg/weather-icon.svg";
import SearchBar from "./SearchBar.jsx";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center items-center">
        <img src={weatherLogo} alt="weather logo" className="size-20" />
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-radial-[at_50%_100%] from-sky-200 via-sky-400 to-sky-900 to-90%">onWeather</h1>
      </div>

      <nav className="w-full">
        <SearchBar />
      </nav>
    </header>
  );
}
