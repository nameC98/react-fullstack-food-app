import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Home />;
      <Outlet />
    </>
  );
}

export default HomeLayout;
