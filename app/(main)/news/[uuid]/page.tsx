import { notFound } from 'next/navigation';
import { NewsType, NewsData } from '@/app/lib/api-types';
import { getNewsByUUID, getSimilarNews } from '@/app/lib/api';
import SingleNews from '@/app/ui/components/news/single-news';
import SimilarNews from '@/app/ui/components/news/similar-news';

export default async function News({ params }: { params: { uuid: string } }) {
  const data: NewsType = await getNewsByUUID(params.uuid);
  const { data: similarData }: NewsData = await getSimilarNews(params.uuid);

  if (!data.uuid) {
    notFound();
  }

  return (
    <section className="container mx-auto my-[35px] flex-1">
      <h2 className="mb-[40px] mt-[50px] text-3xl font-bold leading-7 tracking-tight text-slate-900 dark:text-slate-200">
        {data.title}
      </h2>
      <SingleNews news={data} />
      {!!similarData.length && (
        <>
          <h2 className="mb-2 mt-[40px] text-center text-2xl font-bold leading-7 tracking-tight text-slate-900 dark:text-slate-200">
            Similar News
          </h2>
          <div className="prose prose-slate dark:prose-dark mb-10 text-center text-slate-600">
            <p>Below is a list of some similar news.</p>
          </div>
          <SimilarNews similar={similarData} />
        </>
      )}
    </section>
  );
}
