export default function SearchBar() {
  return (
    <form className="flex justify-center m-1 p-1 w-auto h-auto bg-sky-400 rounded-sm">
      <input
        id="search"
        name="search"
        type="text"
        className="bg-stone-50/80 rounded-l-sm"
      />
      <button className="size-10 text-black bg-amber-400 rounded-r-sm cursor-pointer">
        &#9729;
      </button>
    </form>
  );
}
