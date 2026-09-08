import notAvailble from "@meteocons/svg/fill/not-available.svg";

export default function StatCard({
  title,
  value,
  unit,
  icon,
  className,
  isPending,
}) {
  if (isPending) {
    return (
      <div className="flex flex-col justify-between items-center text-center p-1 m-1 min-h-40 min-w-20 max-h-50 max-w-30 border-2 rounded-md text-stone-50 animate-pulse">
        <p className="w-20 h-7 rounded-4xl bg-sky-200"></p>
        <p className="size-16 rounded-full bg-sky-200"></p>

        <p className="w-16 h-6 rounded-4xl bg-sky-200"></p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-center text-center p-1 m-1 min-h-40 min-w-20 max-h-50 max-w-30 border-2 rounded-md text-stone-50 animate-fade-in-scale">
      <p className="font-semibold text-lg">{title}</p>
      <img
        src={icon === "" ? notAvailble : icon}
        alt="humidity logo"
        className={className}
      />
      <p className="font-normal">
        {value}
        {unit}
      </p>
    </div>
  );
}
