import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/components/admin/Login";
import Menu from "@/components/admin/Menu";
import Pokemon from "@/components/admin/Pokemon";

const IndexMain = () => {
  const siteTitle = "サイトタイトル";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/" element={<Login siteTitle={siteTitle} />} />
        <Route path="/admin/menu/" element={<Menu siteTitle={siteTitle} />} />
        <Route path="/admin/pokemon/" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};
export default IndexMain;
