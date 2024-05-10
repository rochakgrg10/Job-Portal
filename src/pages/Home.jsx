import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoTime } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className="bg-banner bg-cover bg-no-repeat sm:bg-cover sm:bg-center md:bg-cover">
        <div className="flex max-w-[240px] flex-col gap-4 p-4 sm:max-w-[400px] sm:p-6 md:h-screen md:max-w-[678px] md:p-9">
          <p className="text-2xl font-bold sm:text-5xl md:text-7xl">
            Find A <span className="text-primary"> Job</span> That{" "}
            <span className="text-primary"> Matches</span> Your Passion{" "}
          </p>
          <p className="text-xs text-[#616161] sm:text-base md:text-xl">
            Hand-picked opportunities to work from home, remotely, freelance,
            full-time, part-time, contract and internships.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search by job title......................"
              className="border py-2 text-xs sm:text-base md:w-[730px] md:px-8 md:text-xl"
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
      <div className=" bg-[#F6F7FA]">
        <p className="my-10 text-center text-xl font-semibold">
          Popular Categories
        </p>
        <div className="grid grid-cols-2 justify-items-center gap-y-3 sm:grid-cols-4 md:grid-cols-5">
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
          <div className="flex max-w-[100px] flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="h-10 w-10 rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p>Technology</p>
          </div>
        </div>
      </div>

      <div className=" my-10 flex flex-col justify-between gap-3 border px-6 py-4 shadow-2xl md:flex-row">
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-full bg-primary">
            <p className="text-center text-xl font-bold text-white">R</p>
          </div>
          <div>
            <p>Match Company Limited</p>
            <p className="font-bold">Fresher UI/UX Designer (3 Year Exp.)</p>
            <div className="flex items-center gap-3">
              <p className="flex items-center">
                <CiLocationOn />
                Nairobi, Kenya
              </p>
              <p className="flex items-center">
                <IoTime />
                Full Time
              </p>
              <p>Ksh 150,000</p>
            </div>
          </div>
        </div>
        <button className="btn self-center">View Details</button>
      </div>

      <button className="btn mx-auto my-7 flex items-center gap-3">
        View more
        <span>
          <IoArrowForwardCircleOutline className="text-xl" />
        </span>
      </button>
    </>
  );
}

export default Home;
