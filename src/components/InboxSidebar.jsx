import React, { useContext, useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "../index.css"; // Ensure shimmer CSS is in this file or imported
import { ThemeContext } from "../Context/ThemeContext";
import ThreadCard from "./ThreadCard";
import { threadsData } from "../constant.js";

const InboxSidebar = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-[320px] border-r-2 min-h-[100vh] ${
        theme === "dark" ? "border-white/30" : "border-black/30"
      } py-4 px-6`}
    >
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sky-600 text-2xl font-medium">All Inbox(s)</h1>
            <IoIosArrowDown className="text-sky-600" />
          </div>
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            25/25 <span className="text-slate-500">Inbox selected</span>
          </p>
        </div>
        <div className="bg-[#1f1f1f] text-white py-2 h-9 px-2 rounded-md">
          <IoMdRefresh size={22} />
        </div>
      </div>

      {/* Search box */}
      <div className="relative bg-[#1f1f1f] mt-5 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className={`pl-8 w-full py-1 rounded-md  focus:border-blue-500 focus:outline-none ${
            theme === "dark"
              ? "bg-[#1f1f1f]"
              : "bg-white border-black/50 border  text-black"
          } text-white`}
        />
        <CiSearch className="absolute inset-y-0 right-0 m-2 left-0 text-gray-500" />
      </div>

      <div
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } flex justify-between text-white mt-3 items-center`}
      >
        <div
          className={`size-8 text ${
            theme === "dark" ? "text-sky-600" : "text-white"
          } bg-[#1f1f1f] rounded-xl flex items-center justify-center`}
        >
          26
        </div>
        <div
          className={`pr-10 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          <h1>New Replies</h1>
        </div>
        <div
          className={`flex items-center gap-2  ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <h1>Newest</h1>
          <IoIosArrowDown />
        </div>
      </div>

      <hr
        className={`mt-3 ${
          theme === "dark" ? "border-white/30" : "border-black/30"
        } border-t-2`}
      />

      {/* Thread */}
      <div
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } flex flex-col `}
      >
        {loading ? (
          <div className="flex flex-col gap-4 rounded-sm pt-2">
            <div
              className={`${
                theme === "dark" ? "skeleton-dark" : "skeleton-light"
              } h-24 w-full`}
            ></div>
            <div
              className={`${
                theme === "dark" ? "skeleton-dark" : "skeleton-light"
              } h-24 w-full`}
            ></div>
            <div
              className={`${
                theme === "dark" ? "skeleton-dark" : "skeleton-light"
              } h-24 w-full`}
            ></div>
            <div
              className={`${
                theme === "dark" ? "skeleton-dark" : "skeleton-light"
              } h-24 w-full`}
            ></div>
            <div
              className={`${
                theme === "dark" ? "skeleton-dark" : "skeleton-light"
              } h-24 w-full`}
            ></div>
          </div>
        ) : (
          <>
            {threadsData.map((thread) => (
              <div
                key={thread.id}
                className={`border-b-2  ${
                  theme === "dark" ? "border-white/50" : "border-black/50"
                }`}
              >
                <ThreadCard {...thread} onClick={() => {}} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default InboxSidebar;
