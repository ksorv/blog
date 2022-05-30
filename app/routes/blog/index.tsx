import { Link, Outlet, useCatch } from '@remix-run/react';

const Blog: React.FC = () => {
  return (
    <>
      <h1 className="text-red-600">Blog</h1>
      <Link to="test">Test Post</Link>
      <Outlet />
    </>
  );
};

export const CatchBoundary = () => {
  const { statusText } = useCatch();
  return <p>Error!: {statusText}</p>;
};

export default Blog;
