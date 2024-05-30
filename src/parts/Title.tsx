import parse from "html-react-parser";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h2 className="w-fit text-white m-auto text-center">{parse(text)}</h2>;
};
export default Title;
