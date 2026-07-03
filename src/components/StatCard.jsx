export default function StatCard({title, value, unit, icon}) {
  return (
    <div className="p-1 m-1 min-h-32 min-w-32 border-2 rounded-md text-stone-50 font-semibold">
            <p className="text-xl">{title}</p>
            <div className="flex items-center relative h-1/2">
              <p className="text-2xl">{value}{unit}</p>
              <img
                src={icon}
                alt="humidity logo"
                className="size-24 absolute -right-4 top-2 "
              />
            </div>
          </div>  );
}
