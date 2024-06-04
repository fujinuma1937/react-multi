import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/components/admin/Login";
import Menu from "@/components/admin/Menu";

const IndexMain = () => {
  const siteTitle = "サイトタイトル";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/" element={<Login siteTitle={siteTitle} />} />
        <Route path="/admin/menu/" element={<Menu siteTitle={siteTitle} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default IndexMain;
