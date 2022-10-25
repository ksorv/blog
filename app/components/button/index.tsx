import { motion, HTMLMotionProps } from 'framer-motion';
import { cx } from '~/utils/classnames';

interface ButtonProps extends HTMLMotionProps<'button'> {
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.button
      initial={{
        opacity: 1,
        scale: 1.1
      }}
      transition={{
        duration: 0.15
      }}
      animate={{
        scale: 1.05,
        opacity: 1,
        border: '2px solid transparent',
        outline: '2px solid transparent'
      }}
      whileHover={{
        scale: 1.1,
        border: '2px solid rgb(var(--primary))',
        outline: '2px solid rgb(var(--secondary))'
      }}
      whileFocus={{
        scale: 1.1,
        border: '2px solid rgb(var(--primary))',
        outline: '2px solid rgb(var(--tertiary))'
      }}
      className={cx(
        'border-spacing-2 focus:outline-offset-0 bg-secondary text-paccent font-medium capitalize px-5 py-2 cursor-pointer border-gray rounded-[4px] focus:outline-none',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
