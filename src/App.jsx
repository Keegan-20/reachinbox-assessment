import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Inbox from "./Pages/Inbox";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/threadSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const token = url.searchParams.get("token");

    dispatch(setToken(token));
  }, [dispatch]);

  const token = useSelector((store) => store.threads.token);
  console.log("token", token);
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      <Route
        path="/"
        element={
          token ? (
            <Layout>
              <HomePage />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
   <Route
        path="/messages"
        element={
          <Layout>
            <Inbox />
          </Layout>
        }
      />
    
    </Routes>
  );
}

export default App;
