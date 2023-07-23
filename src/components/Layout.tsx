import React, { Fragment, ReactNode } from "react";
import Header from "./Header";

type LayoutPros = {
  children: ReactNode;
};

const Layout: React.FC<LayoutPros> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
