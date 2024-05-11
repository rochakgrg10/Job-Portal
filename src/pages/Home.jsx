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
        <p className="p-5 text-center text-xl font-semibold sm:text-2xl md:text-4xl">
          Popular Categories
        </p>
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 place-content-center items-stretch gap-4 py-4 sm:grid-cols-4 md:grid-cols-5">
          <div className="flex flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3]">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex  flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex  flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex  flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex  flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex  flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex  flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
          <div className="flex flex-col items-center gap-4 border px-8 py-4 shadow-xl">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border bg-[#81c0b3] p-2">
              <img src="/assets/icon.png" />
            </div>
            <p className="text-xl font-semibold">Technology</p>
          </div>
        </div>
      </div>

      <div className="mx-[20px] mt-7 flex flex-col justify-between gap-3 px-6 py-4 shadow-2xl md:mx-[55px] md:flex-row">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex h-20 w-20 items-center justify-center self-center rounded-full bg-primary">
            <p className="text-xl font-bold text-white md:text-4xl">R</p>
          </div>
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-xs sm:text-xl md:text-2xl">
              Match Company Limited
            </p>
            <p className="text-xs font-bold sm:text-xl md:text-2xl">
              Fresher UI/UX Designer (3 Year Exp.)
            </p>
            <div className="flex items-center gap-3">
              <p className="flex items-center text-xs sm:text-xl md:text-2xl">
                <CiLocationOn />
                Nairobi, Kenya
              </p>
              <p className="flex items-center text-xs sm:text-xl md:text-2xl">
                <IoTime />
                Full Time
              </p>
              <p className="text-xs sm:text-xl md:text-2xl">Ksh 150,000</p>
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
