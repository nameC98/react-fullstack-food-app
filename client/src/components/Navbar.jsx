import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink, Outlet } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import Sidebar from "./Sidebar";

const links = [
  {
    text: "Home",
    path: ".",
  },
  {
    text: "Login",
    path: "./login",
  },
  // {
  //   text: "Signup",
  //   path: "./signup",
  // },
];

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("click");
  };

  return (
    <>
      <div className={showSidebar && "overlay-sidebar"}>
        <div
          className={
            showSidebar
              ? "flex justify-between   lg:hidden h-[100vh]"
              : "flex justify-between block"
          }
        >
          <div></div>

          <Sidebar showSidebar={showSidebar} />
        </div>
        <div className=" banner overlay">
          <div className="">
            <div className="h-15vh flex-col-center ">
              <div className="bg-nav  flex-col-center ">
                <div className="container nav flex-between gap-3 mt-2 ">
                  <Logo />
                  <div className="flex-row gap-4 ">
                    {links.map((link) => {
                      const { text, path, icon } = link;

                      return (
                        <NavLink
                          to={path}
                          key={text}
                          className="nav hover_translate z-2 text-black semi-bold"
                          // onClick={isBigSidebar ? null : toggleSidebar}
                          end
                        >
                          {text}
                        </NavLink>
                      );
                    })}
                    <button className="btn box-shadow">Signup</button>
                  </div>
                </div>
              </div>
              <div className="show-sidbar bg-nav-2 container">
                <div className="flex-between  w-full">
                  <Logo />

                  <div className="sidebar-icon z-2 bg-transparent text-[1.75rem] border-transparent  text-[black] lg:hidden">
                    <FaAlignLeft
                      className={
                        showSidebar ? "text-black" : "text-white menu-icon"
                      }
                      onClick={toggleSidebar}
                    />
                  </div>
                </div>
              </div>

              {/* <ul className="flex-row gap-2 text-white z-2 semi-bold">
                <li><a href="">  Home </a></li>
                <li> Login </li>

                <button className="btn box-shadow">Signup</button>
              </ul> */}
            </div>
            <div className="container">
              <div className="flex-col  mb w-full gap-1 text-white  flex-col-2 ">
                <h1 className="z-2 black">Online Restaurant </h1>
                <p className="z-2 semi-bold ">Best Restaurant In Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
