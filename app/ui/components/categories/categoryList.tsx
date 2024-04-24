import { CategoryType } from '@/app/lib/apiTypes';
import CategoryCard from '@/app/ui/components/categories/categoryCard';

export default function CategoryList({
  categories,
}: {
  categories: CategoryType[];
}) {
  return (
    <section className="mb-[50px]">
      <div className="prose prose-slate dark:prose-dark mb-10 max-w-4xl text-slate-600">
        <p>
          This dataset contains around 210k news headlines from 2012 to 2024
          from TheNews. This is one of the biggest news datasets and can serve
          as a benchmark for a variety of computational linguistic tasks.
          TheNews stopped maintaining an extensive archive of news articles
          sometime after this dataset was first collected in 2018, so it is not
          possible to collect such a dataset in the present day. Due to changes
          in the website, there are about 200k headlines between 2012 and May
          2018 and 10k headlines between May 2018 and 2024.
        </p>
      </div>
      <ul className="space-y-6">
        {categories?.map((category) => (
          <CategoryCard key={category.uuid} category={category} />
        ))}
      </ul>
    </section>
  );
}
