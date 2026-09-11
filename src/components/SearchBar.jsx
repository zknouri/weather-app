export default function SearchBar({ onLocationSearch }) {
  async function handleFormAction(formData) {
    const location = formData.get("location");
    await onLocationSearch(location);
  }

  return (
    <form
      action={handleFormAction}
      className="flex justify-center w-auto h-auto animate-fade-in-scale"
    >
      <input
        id="search"
        name="location"
        type="text"
        className="bg-stone-50/80 rounded-l-sm p-2"
        placeholder="Enter location name"
      />
      <button className="size-10 text-black bg-amber-400 rounded-r-sm cursor-pointer">
        &#9729;
      </button>
    </form>
  );
}
