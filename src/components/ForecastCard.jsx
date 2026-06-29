import partlyCloudy from '@meteocons/svg/fill/partly-cloudy-day.svg'

export default function ForecastCard(){
    return <div className="flex flex-col items-center p-1 m-1 min-h-32 w-22 border-2 rounded-md text-stone-50  font-semibold">
        <p className="text-xl">MON</p>
        <img src={partlyCloudy} alt="partly cloudy" className='size-20'/>
        <p>28 °C</p>
    </div>
}