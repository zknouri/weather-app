import weatherLogo from "../assets/svg/weather-icon.svg";
import SearchBar from "./SearchBar.jsx";
import ReactCountryFlag from "react-country-flag";

export default function Header({ onLocationSearch, onLocationSelect, geolocationResults }) {
  return (
    <header>
      <div className="flex justify-center items-center animate-fade-in-scale">
        <img src={weatherLogo} alt="weather logo" className="size-20" />
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-radial-[at_50%_100%] from-sky-200 via-sky-400 to-sky-900 to-90%">
          onWeather
        </h1>
      </div>

      <nav className="w-full m-1 p-1 bg-sky-400 rounded-sm">
        <SearchBar onLocationSearch={onLocationSearch} />
        {(geolocationResults && geolocationResults.length === 0) && <p className="text-center p-1 m-1 bg-sky-300 rounded-sm animate-fade-in-scale">No results found!</p>}
        {(geolocationResults && geolocationResults.length > 0) && (
          <ul className="">
            {geolocationResults.map((geo) => (
              <li
                onClick={() => {onLocationSelect(geo)}}
                key={crypto.randomUUID()}
                className="flex gap-2 p-1 m-1 bg-sky-300 rounded-sm animate-fade-in-scale cursor-pointer"
              >
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode={geo.country}
                    svg
                    style={{ height: "2rem", width: "3rem" }}
                  />
                </div>

                <div>
                  <p className="text-stone-50">
                    {geo.name}{" "}
                    <span className="text-stone-600">{geo?.state}</span>
                  </p>
                  <p>
                    {geo.lat.toFixed(2)}, {geo.lon.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
