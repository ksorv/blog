import { getAllFilesFrontMatter } from 'lib/mdx';
import Link from 'next/link';
import BlogPostCard from 'components/BlogPostCard';

export default function Blog({ posts }) {
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
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}
