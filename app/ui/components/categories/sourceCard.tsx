import { link } from '@/app/lib/utils';
import { SourceType } from '@/app/lib/apiTypes';
import { languages, locales } from '@/app/constants';

export default function SourceCard({ source }: { source: SourceType }) {
  const { source_id, domain, language, locale, categories } = source;

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>

      <a href={link(domain)} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {domain}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Categories:
        {categories?.map((category, index) => {
          return (
            <a
              href={`/categories?category=${category}`}
              key={`${source_id}-${category}`}
            >
              {index !== 0 && ','}
              <span className="pl-1 capitalize hover:text-gray-700">
                {category}
              </span>
            </a>
          );
        })}
      </p>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Language: {languages[language]}
      </p>
      {!!locale && (
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Locale: {locales[locale]}
        </p>
      )}
      <a
        href={link(domain)}
        target="_blank"
        className="inline-flex items-center font-medium text-blue-600 hover:underline"
      >
        {domain}
        <svg
          className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
}
