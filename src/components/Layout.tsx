import { Fragment, ReactNode } from "react";
import Header from "./Header";

type LayoutPros = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPros) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
