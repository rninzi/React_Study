import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUser } from '../lib/api';
import type { User } from './users._index';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const user = await getUser(id);
  return json(user);
};

export default function User() {
  const user: User = useLoaderData();

  return (
    <div>
      <h2>{user.username}</h2>
      <code className="whitespace-pre">{JSON.stringify(user, null, 2)}</code>
    </div>
  );
}
