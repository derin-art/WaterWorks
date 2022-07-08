import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;

  return (
    <div className="flex flex-col p-8 font-Anek w-full ">
      <div className="flex items-center justify-center">
        <div className="absolute left-10 hidden sm:block">
          <div className="flex items-center">
            <span className="text-green-300 mr-1 font-bold w-fit text-6xl">
              GO!{" "}
            </span>
            water by Yinka
          </div>
        </div>
        <Link to="/">
          {" "}
          <button
            className={`px-2 pb-0 text-gray-500 ${
              location === "/" ? "text-green-400" : ""
            }`}
          >
            Home
          </button>
        </Link>
        <Link to="/products" className="block sm:hidden">
          <button
            className={`px-2 pb-0 text-gray-500 ${
              location === "/products" ? "text-green-400" : ""
            }`}
          >
            Products
          </button>
        </Link>
        <Link to="/contact">
          {" "}
          <button
            className={`px-2 pb-0 text-gray-500 ${
              location === "/contact" ? "text-green-400" : ""
            } `}
          >
            Contact
          </button>
        </Link>
      </div>
      <div className="flex items-center block sm:hidden">
        <span className="text-green-300 mr-1 font-bold w-fit text-6xl">
          GO!{" "}
        </span>
        water by Yinka
      </div>
    </div>
  );
}
