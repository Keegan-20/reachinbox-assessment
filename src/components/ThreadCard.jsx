import React, { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";

const ThreadCard = ({ fromEmail, subject, sentAt, onClick, threadId }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`py-3.5 bg ${
        // Assuming there is no selectedThread in static data context
        "border-l-4 border-transparent"
      } pl-2 hover:cursor-pointer`}
      onClick={() => onClick(threadId)} // Adjusted to pass threadId
    >
      <div className="flex gap-4 justify-between">
        <p>{fromEmail}</p>
        <p
          className={`text-sm ${
            theme === "light" ? "font-extralight" : "font-thin"
          }`}
        >
         
        </p>
      </div>

      <p className="font-extralight line-clamp-1">{subject}</p>

      <div className="flex text-sm font-light mt-2 gap-3">
        <div className="flex items-center gap-2 text-green-500 bg-[#1f1f1f] px-1 rounded-md">
          <GoDotFill /> Interested
        </div>
        <div className="flex items-center gap-2 text-slate-300 bg-[#1f1f1f] px-1 rounded-md">
          <IoIosSend /> Campaign Name
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
