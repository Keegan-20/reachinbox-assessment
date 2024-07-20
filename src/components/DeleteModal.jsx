import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedThread, setThreads } from "../redux/threadSlice";
import { toast, Toaster } from "react-hot-toast";
import { staticThreads } from "../constant.js";

const DeleteModal = ({ isOpen, onClose }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const selected_thread = useSelector((store) => store.threads.selectedThread);

  const handleDelete = () => {
    console.log("fsd", selected_thread[0]?.threadId);

    const updatedThreads = staticThreads.filter(
      (thread) => thread.threadId !== selected_thread[0]?.threadId
    );

    dispatch(setThreads(updatedThreads));
    
    if (updatedThreads.length === 0) {
      dispatch(setSelectedThread([]));
    } else {
      dispatch(setSelectedThread([updatedThreads[0]]));
    }

    onClose();
    toast.success("Thread deleted!");
  };

  return (
    <>
      {isOpen && (
        <>
          <Toaster />
          <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
            <div className="fixed inset-0 transition-opacity bg-[#4b4c4d] opacity-50"></div>
            <motion.div
              className={`relative z-20 px-4 py-3 ${
                theme === "dark"
                  ? "bg-[#191a1d] text-white"
                  : "text-slate-800 bg-white"
              } rounded-lg w-[430px]`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateX: "0%", translateY: "0%" }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="mb-2 text-2xl text-center pt-3">Are you sure?</h1>
              <p className="text-slate-400 text-center mt-4 mb-10">
                Your selected email will be deleted
              </p>

              <div
                className={` ${
                  theme === "light" && "text-white"
                } flex justify-center gap-4 pb-4`}
              >
                <button
                  onClick={() => onClose()}
                  className="bg-[#1f1f1f] px-10 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-[#bb2626] px-10 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteModal;
