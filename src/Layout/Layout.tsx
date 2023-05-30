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
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/4">
        <Sidebar />
      </div>
      <div className="container mx-auto mt-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
        {children}
      </div>
    </div>
  </div>
  );
};

export default Layout;
