import { getAllFilesFrontMatter } from 'lib/mdx';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import BlogPostCard from 'components/BlogPostCard';
import { PostsFrontMatter } from 'types/blog';

const Blog: FC<{ posts: PostsFrontMatter }> = ({ posts }) => {
  return (
    <div className="max-w-2xl">
      {posts.map((frontMatter) => (
        <Link key={frontMatter.slug} href={`/blog/${frontMatter.slug}`}>
          <a>
            <BlogPostCard key={frontMatter.title} {...frontMatter} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
};
