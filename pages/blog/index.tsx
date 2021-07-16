import { getAllFilesFrontMatter } from 'lib/mdx';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import BlogPostCard from 'components/BlogPostCard';
import { PostsFrontMatter } from 'types/blog';
import formatDistance from 'date-fns/formatDistance';

const Blog: FC<{ posts: PostsFrontMatter }> = ({ posts }) => {
  return (
    <div className="max-w-2xl py-4">
      <h1 className="text-6xl font-extrabold pt-1 pb-4 capitalize text-black dark:text-white">
        Blog
      </h1>
      <p className="text-xl font-light pt-1 text-black dark:text-white">
        This is the place where I put stuff that people should know... myself
        included. In some {formatDistance(new Date(), new Date('2000-01-01'))}{' '}
        years I&#39;ve lived, I learned a few things and forgot a lot of them!
        So, I&#39;ll put them here, So we both can learn them again when we need
        them.
      </p>
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
