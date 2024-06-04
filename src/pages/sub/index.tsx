import React from "react";
import ReactDOM from "react-dom/client";
import Header from "@/layouts/front/Header";
import Main from "@/pages/sub/IndexMain";
import Footer from "@/layouts/front/Footer";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
);
