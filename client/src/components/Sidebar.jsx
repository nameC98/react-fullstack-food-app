import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    text: "Home",
    path: ".",
  },
  {
    text: "Login",
    path: "./login",
  },
  {
    text: "Signup",
    path: "./signup",
  },
];

function Sidebar({ showSidebar }) {
  return (
    <>
      <div className={showSidebar ? "show-sidbar w-full" : "hidden"}>
        <div className=" show-sidbar gap-2 mt-4 ">
          {links.map((link) => {
            const { text, path, icon } = link;

            return (
              <NavLink
                to={path}
                key={text}
                className="hover_translate  z-2 text-black semi-bold"
                // onClick={isBigSidebar ? null : toggleSidebar}
                end
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
