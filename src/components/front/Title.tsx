import parse from "html-react-parser";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="w-fit text-white mx-auto mb-4 text-center text-xl font-bold">
      {parse(text)}
    </h2>
  );
};
export default Title;
