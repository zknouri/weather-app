import notAvailble from "@meteocons/svg/fill/not-available.svg";

export default function StatCard({ title, value, unit, icon, className }) {
  return (
    <div className="flex flex-col justify-between items-center text-center p-1 m-1 min-h-40 min-w-20 border-2 rounded-md text-stone-50 ">
      <p className="font-semibold text-lg">{title}</p>
      <img src={icon === '' ? notAvailble : icon} alt="humidity logo" className={className} />
      <p className="font-normal">
        {value}
        {unit}
      </p>
    </div>
  );
}
