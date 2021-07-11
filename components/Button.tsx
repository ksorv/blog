import { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  type = 'button'
}) => (
  <button
    className="border rounded bg-purple-600"
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
