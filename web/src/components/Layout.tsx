import React from "react";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";
import { WrapperVarient } from "./Wrapper";
interface LayoutProps {
  varient?: WrapperVarient;
}

const Layout: React.FC<LayoutProps> = ({ children, varient }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={varient}>{children}</Wrapper>
    </>
  );
};

export default Layout;
