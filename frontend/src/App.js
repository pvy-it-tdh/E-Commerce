import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./stores/userSlide";

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        dispatch(setUserDetails(data.data));
      } else {
        throw new Error(data.message || "Failed to fetch user details.");
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
