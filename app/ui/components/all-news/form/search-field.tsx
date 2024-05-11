import clsx from 'clsx';
import { SearchState } from '@/app/lib/api-types';
import { FunnelIcon } from '@heroicons/react/24/outline';

export default function SearchField({
  show,
  state,
  toggleFilter,
}: {
  show: boolean;
  state: SearchState;
  toggleFilter: () => void;
}) {
  return (
    <>
      <label
        className="min-w-sm relative mx-auto mt-10 flex max-w-2xl flex-row flex-wrap items-center justify-center gap-2 rounded-2xl border bg-white px-2 py-2 shadow-2xl focus-within:border-gray-300 md:flex-row md:flex-nowrap"
        htmlFor="search-bar"
      >
        <button
          type="button"
          onClick={toggleFilter}
          className="flex justify-center rounded-xl border border-black bg-black fill-white p-2 text-white transition-all duration-100 will-change-transform active:scale-95 disabled:opacity-70 md:w-auto"
        >
          <FunnelIcon
            className={clsx('h-6 w-6 transition-all duration-1000 ease-in', {
              'text-blue-400': show,
              'text-white': !show,
            })}
          />
        </button>
        <input
          id="search-bar"
          name="search"
          placeholder="Search news..."
          className="w-full flex-1 rounded-md border-gray-300 bg-white px-6 py-2 outline-none focus:border-gray-400 focus:ring-transparent"
        />
        <button
          className="relative w-full overflow-hidden rounded-xl border border-black bg-black fill-white px-6 py-3 text-white transition-all duration-100 will-change-transform active:scale-95 disabled:opacity-70 md:w-auto"
          type="submit"
        >
          <div className="relative">
            <div className="absolute inset-1/2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all">
              <svg
                className="h-full w-full animate-spin opacity-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>

            <div className="opacity-1 valid: flex items-center transition-all">
              <span className="mx-auto truncate whitespace-nowrap text-sm font-semibold">
                Search
              </span>
            </div>
          </div>
        </button>
      </label>
      <div className="mx-auto mt-5 max-w-2xl">
        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.search &&
            state?.errors?.search.map((error) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                <span className="font-semibold">search:</span> {error}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}
