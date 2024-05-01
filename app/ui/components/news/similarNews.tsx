import clsx from 'clsx';
import Link from 'next/link';
import { NewsType } from '@/app/lib/apiTypes';
import { formatDateToLocal } from '@/app/lib/utils';
import { preahvihear } from '@/app/ui/styles/fonts';

export default function SimilarNews({ similar }: { similar: NewsType[] }) {
  return (
    <div className="mb-[60px] sm:flex sm:justify-center">
      {similar.map((news, index) => {
        const { uuid, url, title, description, image_url, published_at } = news;

        return (
          <div
            key={uuid}
            className={clsx(
              'text-surface shadow-secondary-1 dark:bg-surface-dark flex flex-col rounded-lg bg-white dark:text-white sm:shrink-0 sm:grow sm:basis-0',
              {
                'sm:rounded-e-none': index === 0,
                'sm:rounded-none': index === 1,
                'sm:rounded-s-none': index === 2,
              },
            )}
          >
            <a href={url} target="_blank">
              <img
                className={clsx('rounded-t-lg', {
                  'sm:rounded-tr-none': index === 0,
                  'sm:rounded-none': index === 1,
                  'sm:rounded-tl-none': index === 2,
                })}
                src={image_url}
                alt={title}
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                <Link href={`/news/${uuid}`}>{title}</Link>
              </h5>
              <p className="mb-4 text-base">{description}</p>
            </div>
            <div
              className={`${preahvihear.className} text-surface/75 mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-white/10 dark:text-neutral-300`}
            >
              Published at:{' '}
              <small className="font-bold text-gray-500">
                {formatDateToLocal(published_at)}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
