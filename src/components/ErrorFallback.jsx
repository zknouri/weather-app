export default function ErrorFallback(error) {
  return (
    <p className="text-center p-1 m-1 bg-sky-300 rounded-sm animate-fade-in-scale">
      {error.error.message}
    </p>
  );
}
