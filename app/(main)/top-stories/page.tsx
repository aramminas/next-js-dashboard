import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTopStories } from '@/app/lib/api';
import Pagination from '@/app/ui/basic/pagination';
import TopStoriesList from '@/app/ui/components/topStories/topStoriesList';

export const metadata: Metadata = {
  title: 'Top stories',
};

type TopStoriesSearchParams = { searchParams: { page: string } };

export default async function TopStories({
  searchParams,
}: TopStoriesSearchParams) {
  const { page = '1' } = searchParams;
  const { data, meta } = await getTopStories(+page);
  const totalPages = Math.floor(meta?.found / meta?.limit);

  if (!data?.length || !totalPages) {
    notFound();
  }

  return (
    <section className="container mx-auto my-[35px] flex-1">
      <h2 className="mb-2 text-2xl font-bold leading-7 tracking-tight text-slate-900 dark:text-slate-200">
        Top Stories
      </h2>
      <div className="prose prose-slate dark:prose-dark mb-10 max-w-3xl text-slate-600">
        <p>Below is a list of all the top stories of the news site.</p>
      </div>
      <div className="rounded-lg bg-[#fbfbfb] p-3 dark:bg-transparent">
        <TopStoriesList stories={data} />
      </div>
      <div className="my-[30px] flex w-full justify-center">
        <Pagination totalPages={totalPages} bigNum={true} />
      </div>
    </section>
  );
}
