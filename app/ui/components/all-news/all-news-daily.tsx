import Link from 'next/link';
import { getDailyNews } from '@/app/lib/api';

export default async function AllNewsDaily() {
  const globalNews = await getDailyNews(6, 100, 'global');

  return (
    <div className="invisible relative flex w-full items-center md:visible md:py-12">
      {globalNews?.map((news) => {
        const { uuid, image_url, title } = news;

        return (
          <div key={uuid} className="relative h-full w-full overflow-hidden">
            <img
              key={uuid}
              alt={title}
              src={image_url}
              className="h-full w-1/6 w-full hover:opacity-75"
            />
            <Link
              href={`/news/${uuid}`}
              className="absolute left-0 top-0 h-full w-full bg-blue-100 px-2 py-1 text-[12px] opacity-5 transition-all hover:opacity-75"
            >
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
