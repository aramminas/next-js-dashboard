import { NewsType } from '@/app/lib/api-types';
import { preahvihear } from '@/app/ui/styles/fonts';
import { formatDateToLocal, link } from '@/app/lib/utils';

export default function SingleNews({ news }: { news: NewsType }) {
  const { title, description, image_url, published_at, url } = news;

  return (
    <div className="shadow-secondary-1 dark:bg-surface-dark text-surface block rounded-lg bg-white dark:text-white">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg" src={image_url} alt={title} />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          <a href={link(url)} target="_blank">
            {title}
          </a>
        </h5>
        <p className="mb-4 text-base">{description}</p>
        <p
          className={`${preahvihear.className} text-surface/75 text-base dark:text-neutral-300`}
        >
          <small>
            Published at:{' '}
            <span className="font-bold text-gray-500">
              {formatDateToLocal(published_at)}.
            </span>
          </small>
        </p>
      </div>
    </div>
  );
}
