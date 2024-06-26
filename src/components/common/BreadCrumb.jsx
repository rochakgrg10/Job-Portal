import React from "react";

function BreadCrumb({ title }) {
  return (
    <div className="bg-[#F4F5F7] px-4 py-6">
      <p className="text-center text-base font-bold sm:text-xl md:text-2xl">
        {title}
      </p>
    </div>
  );
}

export default BreadCrumb;
