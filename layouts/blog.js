// const editUrl = (slug) =>
//   `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;
// const discussUrl = (slug) =>
//   `https://mobile.twitter.com/search?q=${encodeURIComponent(
//     `https://leerob.io/blog/${slug}`
//   )}`;

export default function BlogLayout({ children, frontMatter }) {
  console.log(frontMatter);
  return <div>{children}</div>;
}
