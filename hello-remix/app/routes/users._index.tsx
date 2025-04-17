import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getUsers } from '../lib/api';

export const loader = async () => {
  const data = await getUsers();
  return json(data);
};

export interface User {
  id: number;
  username: string;
}

export default function Users() {
  const users: User[] = useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
