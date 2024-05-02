import { NewsType } from '@/app/lib/api-types';
import TopStoriesListItem from '@/app/ui/components/topStories/top-stories-list-item';

export default async function TopStoriesList({
  stories,
}: {
  stories: NewsType[];
}) {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-2">
      {stories.map((story) => {
        return <TopStoriesListItem key={story} story={story} />;
      })}
    </div>
  );
}
