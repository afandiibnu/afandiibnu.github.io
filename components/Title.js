const Title = ({ text, size, className }) => {
  return <p className={`font-bold text-dark ${size} ${className}`}>{text}</p>;
};

export default Title;
