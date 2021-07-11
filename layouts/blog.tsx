import { FC } from 'react';
import { BlogLayoutProps } from 'types/blog';

const BlogLayout: FC<BlogLayoutProps> = ({ children, frontMatter }) => {
  console.log(frontMatter);
  return <div>{children}</div>;
};

export default BlogLayout;
