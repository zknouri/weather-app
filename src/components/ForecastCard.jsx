import partlyCloudy from '@meteocons/svg/fill/partly-cloudy-day.svg'

export default function ForecastCard(){
    return <div className="p-1 m-1 min-h-32 min-w-32 border-2 rounded-md text-stone-50  font-semibold">
        <p className="text-xl">MON</p>
        <img src={partlyCloudy} alt="partly cloudy" />
        <p>28 °C</p>
    </div>
}