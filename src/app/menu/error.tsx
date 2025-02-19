'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        ¡Algo salió mal!
      </h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
      >
        Intentar nuevamente
      </button>
    </div>
  );
}