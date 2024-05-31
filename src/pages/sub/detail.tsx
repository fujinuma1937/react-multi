import React from "react";
import ReactDOM from "react-dom/client";
import Header from "@/@/layouts/Header";
import Main from "./DetailMain";
import Footer from "@/@/layouts/Footer";
import "@/@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
);
