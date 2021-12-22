import { Outlet, useCatch } from 'remix';

const Blog: React.FC = () => {
  return (
    <>
      <h1 className="text-red-600">Blog</h1>
      <Outlet />
    </>
  );
};

export const CatchBoundary = () => {
  const { statusText } = useCatch();
  return <p>Error!: {statusText}</p>;
};

export default Blog;
