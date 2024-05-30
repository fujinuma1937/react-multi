import Title from "../parts/Title";
import About from "../sections/About";
import Counter from "../sections/Counter";

const IndexMain = () => {
  return (
    <main className="bg-black py-10">
      <Title text="トップページ" />
      <About />
      <Counter />
    </main>
  );
};
export default IndexMain;
