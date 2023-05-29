import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

interface IProps {
  children: React.ReactNode;
}
const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="container mx-auto mt-12">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
