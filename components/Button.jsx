const Button = ({ children, onClick, type = 'button' }) => (
  <button className="border rounded" type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
