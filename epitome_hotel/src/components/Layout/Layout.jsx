import React from "react";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Routers from "../../router/Routers";
import Cafe from "../../pages/Cafe";
import Kitchen from "../../pages/Kitchen";

const Layout = () => {
  return (
    <>
      <Header />
      <Kitchen />
      <Footer />
    </>
  );
};

export default Layout;
