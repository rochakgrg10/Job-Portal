import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <BreadCrumb title="Login" />
      <form className="mx-auto my-[100px] flex max-w-[320px] flex-col gap-4 border p-8 shadow-xl sm:max-w-[450px] md:max-w-[678px]">
        <label className="font-bold sm:text-base md:text-xl">Username:</label>
        <input
          type="text"
          placeholder="username"
          className="w-full rounded-md border px-2 py-3"
        />
        <label className="font-bold sm:text-base md:text-xl">password:</label>
        <input
          type="text"
          placeholder="password"
          className="w-full rounded-md border px-2 py-3"
        />
        <button className="btn">Login</button>
        <p className="text-center text-base font-bold sm:text-xl md:text-2xl">
          Not a member? <Link to={"/register"}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
