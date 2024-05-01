import { NewsType } from '@/app/lib/apiTypes';
import TopStoriesListItem from '@/app/ui/components/topStories/topStoriesListItem';

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
