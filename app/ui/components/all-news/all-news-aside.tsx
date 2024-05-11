import AllNewsDescription from '@/app/ui/components/all-news/all-news-description';
import AllNewsRandomList from '@/app/ui/components/all-news/all-news-random-list';

export default async function AllNewsAside() {
  return (
    <aside className="flex-2 flex-col items-center px-3 md:w-1/3">
      <AllNewsDescription />
      <AllNewsRandomList />
    </aside>
  );
}
