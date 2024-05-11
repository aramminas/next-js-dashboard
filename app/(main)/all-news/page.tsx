import { Metadata } from 'next';
import { getAllNews } from '@/app/lib/api';
import { notFound } from 'next/navigation';
import AllNewsForm from '@/app/ui/components/all-news/all-news-form';
import AllNewsAside from '@/app/ui/components/all-news/all-news-aside';
import AllNewsDaily from '@/app/ui/components/all-news/all-news-daily';

export const metadata: Metadata = {
  title: 'All News',
};

type AllNewsSearchParams = { searchParams: { page: string; q: string } };

export default async function AllNews({ searchParams }: AllNewsSearchParams) {
  const { page = '1', q = '' } = searchParams;
  const { data, meta, error, latest } = await getAllNews(+page, q);

  if (error) {
    notFound();
  }

  const totalPages = Math.floor(meta?.found / meta?.limit);

  return (
    <section className="container mx-auto mt-[35px] flex-1">
      <div className="flex flex-wrap">
        <AllNewsForm
          page={page}
          data={data}
          totalPages={totalPages}
          latest={latest}
        />
        <AllNewsAside />
      </div>
      <AllNewsDaily />
    </section>
  );
}
