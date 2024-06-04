import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/admin/components/Login";
import Menu from "@/pages/admin/components/Menu";

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
