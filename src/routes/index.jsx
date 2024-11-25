import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../Pages/Error";
import Imobi from "../Pages/Imobi";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(350, 350);
  }, [pathname]);

  return null;
}

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imovel" element={<Imobi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default RouterApp;
