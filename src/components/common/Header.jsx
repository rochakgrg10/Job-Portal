import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex w-[100%] items-center justify-between px-6 py-3 md:px-10">
        <Link
          to={"/"}
          className="text-xl font-extrabold text-primary md:text-3xl"
        >
          JobsPortal
        </Link>
        <div className="flex items-center gap-3 md:gap-7">
          <Link to={"/login"} className="font-bold text-primary">
            login
          </Link>
          <button className="btn">
            <Link to={"/postjob"}>Post a job</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
