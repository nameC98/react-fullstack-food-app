import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    text: "All",
    path: ".",
  },
  {
    text: "Grill",
    path: "./grill",
  },
  {
    text: "SeaFood",
    path: "./sea-food",
  },
  {
    text: "Pasta",
    path: "./pasta",
  },
  {
    text: "Fish",
    path: "./fish",
  },
  {
    text: "Thaifood",
    path: "./thaifood",
  },
  {
    text: "Pizza",
    path: "./pizza",
  },
];

function Food() {
  return (
    <div className="flex-row gap-2 cursor-pointer hover_translate">
      {links.map((link) => {
        const { text, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={text}
            className=" hover_translate semi-bold text-black"
            // onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Food;
