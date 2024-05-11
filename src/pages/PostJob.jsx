import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";

function PostJob() {
  return (
    <div>
      <BreadCrumb title="Create a Job" />
      <form className="mx-[50px] my-[50px] flex flex-col gap-4 border p-6">
        <div className="flex gap-10">
          <label className="flex grow flex-col gap-2 ">
            <p className="font-bold sm:text-base md:text-xl">Company name</p>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border px-2 py-3"
            />
          </label>
          <label className="flex grow flex-col gap-2 ">
            <p className="font-bold sm:text-base md:text-xl">Company Website</p>
            <input
              type="text"
              placeholder="Website Link"
              className="rounded-md border px-2 py-3"
            />
          </label>
        </div>
        <div>
          <label>
            <p className="font-bold sm:text-base md:text-xl">Job Title</p>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-md border px-2 py-3"
          />
        </div>
        <div className="flex gap-10">
          <label className="flex grow flex-col gap-2 ">
            <p className="font-bold sm:text-base md:text-xl">Job Category</p>
            <select className="rounded-md border px-2 py-3">
              <option value="Technology">Technology</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
            </select>
          </label>
          <label className="flex grow flex-col gap-2 ">
            <p className="font-bold sm:text-base md:text-xl">Job Type</p>
            <select className="rounded-md border px-2 py-3">
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default PostJob;
