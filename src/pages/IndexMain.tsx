import Title from "@/components/front/Title";
import About from "@/components/front/About";
import Counter from "@/components/front/Counter";

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
