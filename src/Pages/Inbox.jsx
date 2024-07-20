import React, { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import InboxSidebar from "../components/InboxSidebar";
import { ThemeContext } from "../Context/ThemeContext";
import InboxRightSidebar from "../components/InboxRightSidebar";

// Static data
const data = {
  status: 200,
  data: [
    {
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 1,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>Hi Mitrajit,</p><p>Just wondering if you’re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
    {
      id: 4,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 2,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject: "Test mail",
      body: "<p>Test mail</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
  ],
};

const Inbox = () => {
  const [selectedThread, setSelectedThread] = useState(data.data[0] || {});
  const [threads, setThreads] = useState(data.data || []);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteOpenModal, setDeleteOpenModal] = useState(false);

  const { theme } = useContext(ThemeContext);

  const openDeleteModal = () => {
    setDeleteOpenModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteOpenModal(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`flex h-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white"
      }`}
    >
      <InboxSidebar />

      {/* Middle Part */}
      <div className="flex-grow p-4">
        {threads.length === 0 ? (
          <div
            className={`${
              theme === "light" ? "text-slate-600" : "text-white"
            } text-2xl flex justify-center border border-black/40 rounded-md`}
          >
            <h1>No Threads found!</h1>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className={`${theme === "light" ? "text-black" : ""} flex flex-col`}>
                <p>{selectedThread.fromName}</p>
                <p>{selectedThread.fromEmail}</p>
              </div>

              <div
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } flex font-light`}
              >
                <div className="flex items-center">
                  <button onClick={openDeleteModal}>
                    <MdOutlineDeleteOutline
                      className="text-red-400 mr-2 hover:cursor-pointer"
                      size={26}
                    />
                  </button>
                </div>
                <div>
                  <select
                    className={`p-1 rounded-md mr-3 border-2 border-black/50 ${
                      theme === "dark" ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
                    }`}
                  >
                    <option value="option1">Meeting Completed</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div>
                  <select
                    className={`p-1 rounded-md mr-3 border-2 border-black/50 ${
                      theme === "dark" ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
                    }`}
                  >
                    <option value="option1">Move</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div
                  className={`border-2 border-black/50 size-8 rounded-md flex items-center justify-center ${
                    theme === "dark" ? "bg-[#1f1f1f] text-white" : "text-black"
                  }`}
                >
                  <BsThreeDots />
                </div>
              </div>
            </div>

            <hr
              className={`mt-3 ${
                theme === "dark" ? "border-white/30" : "border-black/30"
              } h-2 border-t-2`}
            />

            {threads.map((msg) => (
              <div
                key={msg.id}
                className={`${
                  theme === "light" ? "bg-white border-2 text-black" : "bg-[#141517]"
                } p-4 mt-2 rounded-md`}
              >
                <div className="flex justify-between">
                  <h1 className="font-medium text-lg">{msg.subject}</h1>
                  <p className="text-sm text-slate-600">
                    {/* Date or additional details can be added here */}
                  </p>
                </div>
                <div className="flex gap-4 text-slate-500 mt-2 mb-2">
                  <p>From: {msg.fromEmail}</p>
                  <p>CC: {msg.cc || "N/A"}</p>
                </div>

                <p className="flex gap-4 mb-6 text-slate-500">
                  To: {msg.toEmail}
                </p>

                <div
                  className="text-sm font-light"
                  dangerouslySetInnerHTML={{ __html: msg.body || "" }}
                />
              </div>
            ))}
          </>
        )}
      </div>

      <InboxRightSidebar isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Inbox;
