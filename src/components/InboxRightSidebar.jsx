import React, { useContext,useState,useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BsSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";

const InboxRightSidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`border-l w-[300px]  ${
        theme === "dark" ? "border-white/30" : "border-black/30"
      }  `}
    >
      <div
        className={`bg-[#23272C] h-10 flex items-center px-5 mt-2 rounded-md mx-2 text-white`}
      >
        Lead Details
      </div>

      <div className="h-[180px]">
        {loading ? (
          <>
            <div className="flex flex-col gap-3 rounded-sm pt-2 px-3 my-2 mb-2">
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`px-3 pt-2 my-2 flex flex-col gap-4 text-sm ${
                theme === "dark" ? "text-gray-200" : "text-slate-800"
              }`}
            >
              <div className="flex justify-between">
                <div>Name: </div>
                <div>Orlando</div>
              </div>

              <div className="flex justify-between">
                <div>Contact No: </div>
                <div>{+9213234343}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm">Email ID: </div>
                <div className="text-sm">orlando@gmail.com</div>
              </div>

              <div className="flex justify-between">
                <div>Linkedin: </div>
                <div>linked.in/in/timvaddle</div>
              </div>

              <div className="flex justify-between">
                <div>Company Name: </div>
                <div>Reachinbox</div>
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className={`bg-[#23272C] h-10 flex items-center px-5 mt-2 rounded-md mx-2 text-white`}
      >
        Activites
      </div>

      <div className="px-3 pt-6 gap-3">
        <div
          className={`${theme == "light" ? "text-slate-800" : "text-gray-200"}`}
        >
          <h1 className="pb-3">Campaign Name</h1>
          <p className="leading-[16.3px] text-sm">3 Steps |  5 Days in Sequence</p>
        </div>
        {loading ? (
          <>
            <div className="flex flex-col gap-3 rounded-sm pt-2 px-3 my-2 mb-2">
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-16 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-16 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-16 px-2 w-full`}
              ></div>
            </div>
          </>
        ) : (
          <div className="relative">
          <div className="absolute left-9 top-1 bottom-0 w-px bg-gray-400"></div>
        
          <div className="flex gap-10 items-center px-3 py-2 mt-2">
            <div className="relative">
              <div className="rounded-full size-12 text-white border bg-[#23272C] text-2xl flex items-center justify-center">
                <MdEmail size={24} />
              </div>
            </div>
            <div className={`${theme == "dark" ? "text-gray-200" : "text-slate-800"} flex flex-col gap-2 font-light`}>
              <div className="text-white">Step 1: Email</div>
              <div className="flex items-center">
                <BsSendFill className="mr-2" />
                <p>Sent: Feb</p>
              </div>
            </div>
          </div>
        
          <div className="flex gap-10 items-center px-3 py-2 mt-2">
            <div className="relative">
              <div className="rounded-full size-12 text-white border bg-[#23272C] text-2xl flex items-center justify-center">
                <MdEmail size={24} />
              </div>
            </div>
            <div className={`${theme == "dark" ? "text-gray-200" : "text-slate-800"} flex flex-col gap-2 font-light`}>
              <div className="text-white">Step 2: Email</div>
              <div className="flex items-center">
                <BsFillEnvelopeOpenFill className="mr-2 text-yellow-500" />
                <p>Opened: 5th Feb</p>
              </div>
            </div>
          </div>
        
          <div className="flex gap-10 items-center px-3 py-2 mt-2">
            <div className="relative">
              <div className="rounded-full size-12 text-white border bg-[#23272C] text-2xl flex items-center justify-center">
                <MdEmail size={24} />
              </div>
            </div>
            <div className={`${theme == "dark" ? "text-gray-200" : "text-slate-800"} flex flex-col gap-2 font-light`}>
              <div className="text-white">Step 3: Email</div>
              <div className="flex items-center">
                <BsFillEnvelopeOpenFill className="mr-2 text-yellow-500" />
                <p>Opened: 5th Feb</p>
              </div>
            </div>
          </div>
        </div>
        
        )}
      </div>
    </div>
  );
};

export default InboxRightSidebar;
