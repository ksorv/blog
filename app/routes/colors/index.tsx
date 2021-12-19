import { useCatch } from 'remix';

const Colors: React.FC = () => {
  return <p>Hello</p>;
};

export const CatchBoundary = () => {
  const { statusText } = useCatch();
  return <p>Error!: {statusText}</p>;
};

export default Colors;
