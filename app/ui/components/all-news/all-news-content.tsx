import { NewsType } from '@/app/lib/api-types';
import Pagination from '@/app/ui/basic/pagination';
import AllNewsArticle from '@/app/ui/components/all-news/all-news-article';

export default function AllNewsContent({
  data,
  totalPages,
  search,
}: {
  data: NewsType[];
  totalPages: number;
  search: string;
}) {
  return (
    <section className="flex-1 flex-col items-center px-3 md:w-2/3">
      {(data || []).map((news) => {
        return <AllNewsArticle key={news.uuid} news={news} />;
      })}
      <div className="my-[30px] flex w-full justify-center">
        <Pagination totalPages={totalPages} bigNum={true} q={search} />
      </div>
    </section>
  );
}
