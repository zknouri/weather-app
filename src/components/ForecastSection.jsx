import { useRef, useState } from "react";

import ForecastCard from "./ForecastCard.jsx";
import ForecastCardDetails from "./ForecastCardDetails.jsx";
import { WEATHER_CONDITIONS } from "../lib/constants.js";
import previousButton from "../assets/svg/previous-button-green-icon.svg";
import nextButton from "../assets/svg/next-button-green-icon.svg";

export default function ForecastSection({ forecastData, isPending }) {
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  const [selectedForecast, setSelectedForecast] = useState();
  const forecastCardDetailsRef = useRef();

  function slideNext() {
    if (currentSlidePosition >= 720) {
      setCurrentSlidePosition(0);
    } else {
      setCurrentSlidePosition((prevPosition) => prevPosition + 80);
    }
  }

  function slidePrevious() {
    if (currentSlidePosition <= 0) {
      setCurrentSlidePosition(720);
    } else {
      setCurrentSlidePosition((prevPosition) => prevPosition - 80);
    }
  }

  if (isPending) {
    return (
      <div className="relative m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50 overflow-clip">
        <div
          className={`flex transition ease-in-out duration-800`}
          style={{ transform: "translateX(-" + currentSlidePosition + "%)" }}
        >
          <ForecastCard isPending={isPending} />
          <ForecastCard isPending={isPending} />
          <ForecastCard isPending={isPending} />
          <ForecastCard isPending={isPending} />
          <ForecastCard isPending={isPending} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50 overflow-clip">
        <button
          onClick={slidePrevious}
          className="absolute top-20 min-w-7 cursor-pointer z-10"
        >
          <img src={previousButton} alt="previous button" className="size-7" />
        </button>
        <div
          className={`flex transition ease-in-out duration-800`}
          style={{ transform: "translateX(-" + currentSlidePosition + "%)" }}
        >
          {forecastData.list.map((forecast) => {
            return (
              <ForecastCard
                selectedForecast={selectedForecast}
                setSelectedForecast={setSelectedForecast}
                forecastDetailsRef={forecastCardDetailsRef}
                key={forecast.dt}
                forecastData={forecast}
              />
            );
          })}
        </div>
        <button
          onClick={slideNext}
          className="absolute right-1 top-20 min-w-7 cursor-pointer z-10"
        >
          <img src={nextButton} alt="previous button" className="size-7" />
        </button>
      </div>

      <ForecastCardDetails
        forecastDetails={selectedForecast}
        forecastDetailsRef={forecastCardDetailsRef}
      />
    </>
  );
}
