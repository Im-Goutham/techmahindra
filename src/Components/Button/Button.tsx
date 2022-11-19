import './Button.scss'

type ButtonProps = {
  text: string;  
  value: number;
  onClick: (val: number) => void;
};

const Button = ({ text, value, onClick }: ButtonProps) => {
  const handleClick = () => {
    onClick(value);
  };
  return <button className="btn" onClick={handleClick}>{text}</button>;
};

export default Button;
