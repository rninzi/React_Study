import { json, ActionFunctionArgs } from '@remix-run/node';
import {
  Link,
  useLoaderData,
  Form,
  useNavigation,
  redirect,
} from '@remix-run/react';
import { createStory, getStories } from '../lib/api';
import { useRef, useEffect } from 'react';

export const loader = async () => {
  const stories = await getStories();
  return json(stories);
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');
  const story = await createStory({ title, body });
  return redirect(`/stories/${story.id}`);
}

export interface Story {
  id: number;
  title: string;
  body: string;
}

export default function Stories() {
  const stories: Story[] = useLoaderData();
  const transition = useNavigation();

  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (transition.state === 'submitting') {
      //  ref.current 값이 유효할 때에만 reset 함수를 호출
      ref.current?.reset();
    }
  }, [transition.state]);

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
      <Form method="post" ref={ref} action="/stories">
        <div className="flex flex-col gap-1 w-80">
          <input type="text" name="title" placeholder="제목을 입력하세요..." />
          <textarea name="body" placeholder="이야기를 입력하세요..." />
          <button type="submit">
            {transition.state === 'submitting' ? '등록 중...' : '등록'}
          </button>
        </div>
      </Form>
    </div>
  );
}
