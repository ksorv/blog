import Link from './index';

export default {
  title: 'Components/Link',
  component: Link
};

export const Default = () => <Link to="/">hello</Link>;
export const Active = () => (
  <Link active to="/">
    hello
  </Link>
);
