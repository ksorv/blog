import { Link as RemixLink } from '@remix-run/react';
import { RemixLinkProps } from '@remix-run/react/dist/components';
import { motion, MotionProps } from 'framer-motion';
import { cx } from '~/utils/classnames';

type LinkProps = React.RefAttributes<HTMLAnchorElement> &
  RemixLinkProps &
  MotionProps & {
    children: React.ReactNode;
    active?: boolean;
    to: string;
    className?: string;
  };

const MotionLink = motion(RemixLink);

const Link: React.FC<LinkProps> = ({
  children,
  className,
  active,
  ...props
}) => {
  return (
    <MotionLink
      transition={{
        duration: 0.15
      }}
      className={cx(
        'border-gray flex border-spacing-2 cursor-pointer flex-col py-1 font-medium capitalize leading-4 text-tertiary hover:text-secondary focus:text-secondary focus:outline-none',
        {
          'active pointer-events-none text-secondary hover:text-tertiary':
            active
        },
        className
      )}
      prefetch="intent"
      {...props}
    >
      {children}
    </MotionLink>
  );
};

export default Link;
