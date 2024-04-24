import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSources } from '@/app/lib/api';
import SourceCard from '@/app/ui/components/categories/sourceCard';
import Pagination from '@/app/ui/basic/pagination';
import { PageProps } from '@/app/lib/types';

export const metadata: Metadata = {
  title: 'Sources',
};

export default async function Sources({ searchParams }: PageProps) {
  const { page = '1' } = searchParams;
  const { data, meta } = await getSources(+page);

  const totalPages = Math.floor(meta?.found / meta?.limit);

  if (!data?.length) {
    notFound();
  }

  return (
    <section className="container mx-auto mt-[35px] flex-1">
      <h2 className="mb-2 text-2xl font-bold leading-7 tracking-tight text-slate-900 dark:text-slate-200">
        All Sources
      </h2>
      <div className="prose prose-slate dark:prose-dark mb-10 max-w-3xl text-slate-600">
        <p>Below is a list of all the sources of the news site.</p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3">
        {data.map((source) => (
          <SourceCard key={source.source_id} source={source} />
        ))}
      </div>
      <div className="my-[30px] flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
}
