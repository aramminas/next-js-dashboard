import Link from 'next/link';
import { NewsType } from '@/app/lib/api-types';
import { link, formatDateToLocal } from '@/app/lib/utils';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function AllNewsArticle({ news }: { news: NewsType }) {
  const {
    uuid,
    title,
    image_url,
    categories,
    description,
    source,
    published_at,
  } = news;

  return (
    <article className="my-4 flex flex-col shadow">
      <Link href={`/news/${uuid}`} className="hover:opacity-75">
        <img src={image_url} alt={title} className="w-full" />
      </Link>
      <div className="flex flex-col justify-start bg-white p-6">
        <div className="flex">
          {categories?.map((category) => (
            <Link
              key={`${uuid}-${category}`}
              href={`/categories?category=${category}`}
              className="mr-2 pb-4 text-sm font-bold uppercase text-blue-700"
            >
              {category}
            </Link>
          ))}
        </div>
        <Link
          href={`/news/${uuid}`}
          className="pb-4 text-3xl font-bold hover:text-gray-700"
        >
          {title}
        </Link>
        <p className="pb-3 text-sm">
          By{' '}
          <a
            href={link(source)}
            target="_blank"
            className="font-semibold hover:text-gray-800"
          >
            {source}
          </a>
          , Published on {formatDateToLocal(published_at, undefined, 'long')}
        </p>
        <span className="pb-6">{description}</span>
        <Link
          href={`/news/${uuid}`}
          className="flex items-center uppercase text-gray-800 hover:text-black"
        >
          Continue Reading{' '}
          <ArrowRightIcon className="ml-1 h-5 w-5 text-gray-900" />
        </Link>
      </div>
    </article>
  );
}
