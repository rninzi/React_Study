import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="font-sans leading-[1.4]">
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}
