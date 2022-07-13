import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { supabase } from "./supabase/client";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
