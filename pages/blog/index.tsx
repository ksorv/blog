import { getAllFilesFrontMatter } from 'lib/mdx';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import BlogPostCard from 'components/BlogPostCard';
import { PostsFrontMatter } from 'types/blog';
import formatDistance from 'date-fns/formatDistance';
import { Center, Container, Heading, Text } from '@chakra-ui/react';
import { Meta } from 'components/Meta';

const Blog: FC<{ posts: PostsFrontMatter }> = ({ posts }) => {
  return (
    <>
      <Meta title="Blog - Saurav Khdoolia" />
      <Container maxWidth="2xl" paddingY={4}>
        <Heading size="2xl">Blog</Heading>
        <Text size="xl">
          This is the place where I put stuff that people should know... myself
          included. In some {formatDistance(new Date(), new Date('2000-01-01'))}{' '}
          years I&#39;ve lived, I learned a few things and forgot a lot of them!
          So, I&#39;ll put them here, So we both can learn them again when we
          need them.
        </Text>
        {posts.map((frontMatter) => (
          <Link key={frontMatter.slug} href={`/blog/${frontMatter.slug}`}>
            <BlogPostCard key={frontMatter.title} {...frontMatter} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
};
