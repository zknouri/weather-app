import { useRef, useState } from "react";

import ForecastCard from "./ForecastCard.jsx";
import ForecastCardDetails from "./ForecastCardDetails.jsx";
import previousButton from "../assets/svg/previous-button-green-icon.svg";
import nextButton from "../assets/svg/next-button-green-icon.svg";

export default function ForecastSection({ forecastData, isPending }) {
  const [selectedForecast, setSelectedForecast] = useState();
  const forecastCardDetailsRef = useRef();
  const carouselRef = useRef();
  const cardRef = useRef();

  function slideNext() {
    const cardWidth = cardRef.current.offsetWidth;

    carouselRef.current.scrollBy({ left: cardWidth * 5, behavior: "auto" });
  }

  function slidePrevious() {
    const cardWidth = cardRef.current.offsetWidth;

    carouselRef.current.scrollBy({ left: -(cardWidth * 5), behavior: "auto" });
  }

  if (isPending) {
    return (
      <div className="relative m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50 overflow-clip">
        <div className={`flex transition ease-in-out duration-800`}>
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
      <div className="relative m-1 p-1 w-auto h-auto bg-sky-400/70 rounded-sm text-stone-50 overflow-hidden">
        <button
          onClick={slidePrevious}
          className="absolute top-20 min-w-7 cursor-pointer z-10"
        >
          <img src={previousButton} alt="previous button" className="size-7" />
        </button>
        <div
          ref={carouselRef}
          className="flex transition ease-in-out duration-800 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
        >
          {forecastData.list.map((forecast) => {
            return (
              <ForecastCard
                selectedForecast={selectedForecast}
                setSelectedForecast={setSelectedForecast}
                forecastDetailsRef={forecastCardDetailsRef}
                cardRef={cardRef}
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
