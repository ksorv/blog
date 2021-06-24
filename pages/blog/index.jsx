import { getAllFilesFrontMatter } from 'lib/mdx';

export default function Blog({ posts }) {
  return (
    <>
      {posts.map((frontMatter) => (
        <div key={frontMatter.title}>{frontMatter.title}</div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}
