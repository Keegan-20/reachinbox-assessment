import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <aside
      className={`${
        theme == "light" ? "bg-purple-100" : "bg-[#101113]"
      } text-white w-14 fixed top-0 left-0 h-[100vh] flex flex-col justify-between py-4 items-center`}
    >
      <img
        src="/Sidebar-img/Logo_holder.png"
        alt="Logo"
        width={40}
        height={40}
      />

      <div className="flex items-center justify-start flex-col gap-7 h-[500px]">
        <img
          src="/Sidebar-img/Home.svg"
          alt="home icon"
          width={28}
          height={28}
        />
        <img
          src="/Sidebar-img/contact.svg"
          alt="contact icon"
          width={28}
          height={28}
        />
        <img
          src="/Sidebar-img/email.svg"
          alt="email icon"
          width={28}
          height={28}
        />
        <img
          src="/Sidebar-img/send.svg"
          alt="send icon"
          width={28}
          height={28}
        />
        <img
          src="/Sidebar-img/menu.svg"
          alt="menu icon"
          width={28}
          height={28}
        />
        {/* onebox */}

        <img
          src="/Sidebar-img/Inbox.svg"
          alt="inbox icon"
          width={28}
          height={28.29}
          className="bg-[#3bf3f3]px-[4px] py-[7px]"
        />

        <img
          src="/Sidebar-img/bar_chart.svg"
          alt="chart icon"
          width={28}
          height={28}
        />
      </div>

      <div className="bg-green-900 size-10 rounded-full px-1 py-2  flex items-center justify-center"> KC </div>
    </aside>
  );
};

export default Sidebar;
