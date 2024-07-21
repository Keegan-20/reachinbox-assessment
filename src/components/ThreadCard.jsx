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

  const getStatusClasses = (status) => {
    const baseClasses = "flex items-center gap-2 text-[12px] leading-[13.62px] font-semibold w-28 h-6 py-[3px] px-2 rounded-[17px] border border-[#F0F0F0]";
    const themeBgColor = theme === "dark" ? "bg-[#1f1f1f] border-none" : "bg-white";

    switch (status) {
      case "Interested":
        return `${baseClasses} text-[#57E0A6] ${themeBgColor}`;
      case "Closed":
        return `${baseClasses} text-[#626FE6] ${themeBgColor}`;
      case "Meeting Completed":
        return `${baseClasses} text-[#E6D162] ${themeBgColor}`;
      default:
        return `${baseClasses} text-[#9C62E6] ${themeBgColor}`;
    }
  };

  return (
    <div
      className={`py-3.5 ${
        theme === "dark" ? "bg-black" : "bg-white"
      } border-l-4 border-transparent pl-2 hover:cursor-pointer`}
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
        <div className={getStatusClasses(status)}>
          <GoDotFill /> {status}
        </div>

        <div
          className={`flex items-center gap-2 text-slate-300 border border-[#F0F0F0] w-28 h-6 ${
            theme === "dark" ? "bg-[#1f1f1f] border-none" : "bg-white text-[#637381]"
          } rounded-[17px] px-[3px] py-3`}
        >
          <IoIosSend className="h-[12px]" />
          <p className="text-[10px] leading-[13.62px] font-semibold">{campaign}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
