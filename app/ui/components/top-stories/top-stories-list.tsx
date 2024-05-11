import { NewsType } from '@/app/lib/api-types';
import TopStoriesListItem from '@/app/ui/components/top-stories/top-stories-list-item';

export default async function TopStoriesList({
  stories,
}: {
  stories: NewsType[];
}) {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-2">
      {stories.map((story) => {
        return <TopStoriesListItem key={story.uuid} story={story} />;
      })}
    </div>
  );
}
