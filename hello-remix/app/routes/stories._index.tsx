import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getStories } from '../lib/api';

export const loader = async () => {
  const stories = await getStories();
  return json(stories);
};

interface Story {
  id: number;
  title: string;
  body: string;
}

export default function Stories() {
  const stories: Story[] = useLoaderData();

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link to={`/stories/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
