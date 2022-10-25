type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSizes = 'xlg' | 'lg' | 'md' | 'sm' | 'xs';

export const Heading: React.FC<{ size: HeadingSizes; as: HeadingTypes }> = ({
  children
}) => {
  return <h1>{children}</h1>;
};
