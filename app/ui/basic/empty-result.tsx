export default function EmptyResult() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg bg-white px-10 py-4 shadow-lg">
      <div>
        <span className="mr-2 rounded bg-gray-100 px-2.5 py-0.5 font-mono text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-300">
          empty result
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="flex items-center justify-center">
          <img
            className="h-64 w-64"
            src="/empty-result.svg"
            alt="image empty states"
          />
        </div>
        <h1 className="mb-3 text-center text-2xl font-medium text-gray-700">
          Nothing was found for your request!
        </h1>
        <p className="mb-6 text-center text-gray-500">
          please enter a new query to receive other news.
        </p>
      </div>
    </div>
  );
}
