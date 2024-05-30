import { useState } from "react";
import { Button } from "@/components/ui/button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="bg-white p-4 w-fit m-auto">
      <p className="text-center">カウント:{count}</p>
      <div className="flex gap-x-2 w-fit m-auto">
        <Button
          className="block m-auto bg-sky-600 hover:bg-sky-900"
          onClick={() => setCount(count + 1)}
        >
          カウントアップ
        </Button>
        <Button
          className="block m-auto bg-slate-600 hover:bg-slate-900"
          onClick={() => setCount(count - 1)}
        >
          カウントダウン
        </Button>
      </div>
    </section>
  );
};
export default Counter;
