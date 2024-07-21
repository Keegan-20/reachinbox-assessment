import React, { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";

const ThreadCard = ({
  fromEmail,
  subject,
  sentAt,
  status,
  campaign,
  onClick,
  threadId,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`py-3.5 bg ${
        // Assuming there is no selectedThread in static data context
        "border-l-4 border-transparent"
      } pl-2 hover:cursor-pointer`}
      onClick={() => onClick(threadId)}
    >
      <div className="flex gap-4 justify-between">
        <p>{fromEmail}</p>
        <p
          className={`text-sm ${
            theme === "light" ? "font-extralight" : "font-thin"
          }`}
        >
          {sentAt}
        </p>
      </div>

      <p className="font-extralight line-clamp-1 ">{subject}</p>

      <div className="flex text-sm font-light mt-2 gap-3">
        <div
          className={`flex items-center gap-2  text-[12px] leading-[13.62px] font-semibold w-28 h-6 py-[3px] px-2 rounded-[17px] ${
            status === "Interested"
              ? "text-[#57E0A6] bg-[#1f1f1f]"
              : status === "Closed"
              ? "text-[#626FE6] bg-[#1f1f1f]"
              : status === "Meeting Completed"
              ? "text-[#E6D162] bg-[#1f1f1f]"
              : "text-[#9C62E6] bg-[#1f1f1f]"
          }`}
        >
          <GoDotFill /> {status}
        </div>

        <div className="flex items-center gap-2 text-slate-300 w-28 h-6 bg-[#1f1f1f] rounded-[17px] px-[3px] py-3 ">
          <IoIosSend className="h-[12px]" /> <p className="text-[10px] leading-[13.62px] font-semibold ">{campaign}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
