import { link } from '@/app/lib/utils';
import { NewsType } from '@/app/lib/api-types';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function CategoryCard({ category }: { category: NewsType }) {
  const {
    title,
    description,
    keywords,
    source,
    url,
    image_url,
    published_at,
    categories,
  } = category;

  return (
    <li className="flex flex-col-reverse items-start bg-slate-50 p-4 pb-10 dark:bg-slate-800/50 sm:mx-0 sm:rounded-2xl sm:p-10 xl:flex-row">
      <div className="flex-auto">
        <h3 className="mb-4 text-sm font-semibold leading-6 text-blue-500">
          {title}
        </h3>
        <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
          {title}
        </p>
        <div className="mb-6 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>{description}</p>
          <p>{keywords}</p>
          <p className="flex text-gray-800">
            <CalendarDaysIcon className="mr-2 h-6 w-6 text-gray-900" />
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }).format(new Date(published_at))}
            <a
              href={link(source)}
              className="ml-2 font-bold text-blue-500 hover:text-blue-800 hover:underline"
              target="_blank"
            >
              {source}
            </a>
          </p>
          <div className="px-6 pb-2 pt-4">
            {categories.map((category) => {
              return (
                <span
                  key={`${category}-${Math.random()}`}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{category}
                </span>
              );
            })}
          </div>
        </div>
        <a
          className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
          target="_blank"
          href={url}
        >
          Learn more<span className="sr-only">, Refactoring UI</span>
          <svg
            className="ml-3 overflow-visible text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <div className="mb-10 w-full flex-none xl:mb-0 xl:ml-8 xl:w-[29rem]">
        <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] overflow-hidden rounded-lg bg-slate-100 shadow-lg dark:bg-slate-800">
          <picture>
            <source
              type="image/jpeg"
              srcSet={image_url}
              media="(min-width: 640px)"
            />
            <img src={image_url} alt={title} decoding="async" />
          </picture>
        </div>
      </div>
    </li>
  );
}
