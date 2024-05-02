import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNewsByCategory } from '@/app/lib/api';
import Pagination from '@/app/ui/basic/pagination';
import CategoryList from '@/app/ui/components/categories/category-list';

export const metadata: Metadata = {
  title: 'Categories',
};

type CategorySearchParams = { category: string; page: string };

export default async function Categories({
  searchParams,
}: {
  searchParams: CategorySearchParams;
}) {
  const { category, page = '1' } = searchParams;
  const { data, meta } = await getNewsByCategory(category, +page);

  if (!data) {
    return notFound();
  }

  const totalPages = Math.floor(meta?.found / meta?.limit);

  return (
    <>
      <section className="container mx-auto mt-[35px] flex-1">
        <h2 className="mb-2 text-2xl font-bold leading-7 tracking-tight text-slate-900 dark:text-slate-200">
          Category:{' '}
          <span className="prose prose-slate dark:prose-dark max-w-3xl pl-1 text-slate-500">
            {category}
          </span>
        </h2>
        <CategoryList categories={data} />
      </section>
      <section>
        <div className="my-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}
