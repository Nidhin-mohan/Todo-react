import React from "react";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = ({children}) => {
  return (
    <div className="flex  flex-col space-y-4 justify-between ">
     
      <Header />
      <main className="flex flex-col min-h-screen">
        <Toaster />

        {children}
      </main>
     
    </div>
  );
};


export default Layout;
