import React from "react";
import ReactDOM from "react-dom/client";
import AdminHeader from "@/layouts/admin/AdminHeader";
import AdminSidebar from "@/layouts/admin/AdminSidebar";
import AdminFooter from "@/layouts/admin/AdminFooter";
import IndexMain from "@/pages/admin/menu/IndexMain";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative w-screen h-screen bg-gray-100 font-gothic py-10">
      <AdminHeader />
      <div className="h-full flex">
        <AdminSidebar />
        <IndexMain />
      </div>
      <AdminFooter />
    </div>
  </React.StrictMode>
);
