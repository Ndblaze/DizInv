import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import axios from "axios";

//pages imported
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import ResetPassword from "./pages/auth/ResetPassword";
import Admin from "./pages/Admin";
import Dashboard from "./miniPages/admin/Dashboard";
import Teachers from "./miniPages/admin/Teachers";
import Profile from "./miniPages/admin/Profile";
import StudentListingSection from "./miniPages/admin/StudentListingSection";
import StudentListingSpeciality from "./miniPages/admin/StudentListingSpeciality";
import UserProfile from "./miniPages/admin/UserProfile";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      email: sessionStorage.getItem("email"),
      type: sessionStorage.getItem("type"),
      success: sessionStorage.getItem("success"),
    });
  }, []);

  return (
    <BrowserRouter>
      <>
        <Routes>
          {!user.success && (
            <>
              <Route
                exact
                path="/login"
                element={<Login setUser={setUser} />}
              />
              <Route exact path="/forgot" element={<Forgot />} />
              <Route
                exact
                path="/reset-password/:email/:token"
                element={<ResetPassword />}
              />
            </> 
          )}
          {user.type === "admin" && (
            <Route path="/admin" element={<Admin />}>
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="teacher" element={<Teachers />} />
              <Route exact path="profile" element={<Profile />} />
              <Route exact path="section/:id" element={<StudentListingSection />} />
              <Route exact path="speciality/:id" element={<StudentListingSpeciality />} />
              <Route exact path="user/:id" element={<UserProfile />} />
            </Route>
          )}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
