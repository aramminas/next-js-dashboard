import Link from 'next/link';
import { NewsType } from '@/app/lib/api-types';
import { preahvihear } from '@/app/ui/styles/fonts';
import { formatDateToLocal, link } from '@/app/lib/utils';

export default function TopStoriesListItem({ story }: { story: NewsType }) {
  const {
    uuid,
    title,
    description,
    url,
    image_url,
    published_at,
    source,
    categories,
  } = story;

  return (
    <div className="text-surface shadow-secondary-1 dark:bg-surface-dark mx-3 mt-6 flex flex-col self-start rounded-lg bg-white dark:text-white sm:shrink-0 sm:grow sm:basis-0">
      <a href={url}>
        <img
          className="h-full max-h-[340px] w-full rounded-t-lg"
          src={image_url}
          alt={title}
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          <Link href={`/news/${uuid}`}>{title}</Link>
        </h5>
        <p className="mb-4 text-base">{description}</p>
        <a
          className={`${preahvihear.className} text-[#0075df] hover:text-[#025eb1] hover:underline`}
          href={link(source)}
          target="_blank"
        >
          {source}
        </a>
        <div>
          {categories?.map((category) => {
            return (
              <span key={`${uuid}-${category}`} className="text-gray-400">
                #{category}
              </span>
            );
          })}
        </div>
      </div>
      <div
        className={`${preahvihear.className} text-surface/75 mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-gray-500 dark:border-white/10 dark:text-neutral-300`}
      >
        <small>Published at: {formatDateToLocal(published_at)}</small>
      </div>
    </div>
  );
}
