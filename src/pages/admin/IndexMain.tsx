import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "@/pages/admin/components/Login";
import { useState } from "react";
import { Divide } from "lucide-react";

const IndexMain = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <main className="relative w-screen h-screen bg-gray-200">
      <BrowserRouter>
        <Routes>
          {isAuth && <div>サイドバー</div>}
          <Route path="/admin/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default IndexMain;
