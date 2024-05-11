import Link from 'next/link';
import { getDailyNews } from '@/app/lib/api';
import { NewspaperIcon } from '@heroicons/react/24/solid';

export default async function AllNewsRandomList() {
  const dailyNews = await getDailyNews(10, 100, 'social media');

  return (
    <div className="my-4 flex w-full flex-col bg-white p-6 shadow">
      <p className="pb-5 text-xl font-semibold capitalize">
        Social media news today
      </p>
      <div className="grid grid-cols-3 gap-3">
        {dailyNews?.map((news) => {
          const { uuid, image_url, title } = news;

          return (
            <div key={uuid} className="relative overflow-hidden">
              <img
                key={uuid}
                alt={title}
                src={image_url}
                className="h-full w-full hover:opacity-75"
              />
              <Link
                href={`/news/${uuid}`}
                className="absolute left-0 top-0 h-full w-full bg-blue-100 text-[12px] opacity-5 transition-all hover:opacity-75"
              >
                {title}
              </Link>
            </div>
          );
        })}
      </div>
      <a
        target="_blank"
        href="https://www.instagram.com/"
        className="mt-6 flex w-full items-center justify-center rounded bg-black px-2 py-3 text-sm font-bold uppercase text-white hover:bg-gray-900"
      >
        <NewspaperIcon className="mr-1 w-5 md:w-6" /> Follow @Acme-news
      </a>
    </div>
  );
}
