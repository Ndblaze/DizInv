import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import axios from "axios";

//pages imported auth
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import ResetPassword from "./pages/auth/ResetPassword";

//pages imported Admin
import Admin from "./pages/Admin";
import Dashboard from "./miniPages/admin/Dashboard";
import Teachers from "./miniPages/admin/Teachers";
import Profile from "./miniPages/admin/Profile";
import StudentListingSection from "./miniPages/admin/StudentListingSection";
import StudentListingSpeciality from "./miniPages/admin/StudentListingSpeciality";
import UserProfile from "./miniPages/admin/UserProfile";

//pages imported Teacher
import Teacher from "./pages/Teacher";
import TeacherHome from "./miniPages/teachers/TeacherHome";
import TeacherProfile from "./miniPages/teachers/TeacherProfile";
import AdminSchedules from "./miniPages/admin/AdminSchedules";

//pages imported chelf department
import ChelfDepartment from "./pages/ChelfDepartment";
import ChelfSession from "./miniPages/chelfDepartment/ChelfSession";
import ChelfDashBoard from "./miniPages/chelfDepartment/ChelfDashBoard";
import ChelfJustification from "./miniPages/chelfDepartment/ChelfJustification";
import TeacherSchedule from "./miniPages/teachers/TeacherSchedule";
import TeacherMainHome from "./miniPages/teachers/TeacherMainHome";

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
              <Route
                exact
                path="section/:id"
                element={<StudentListingSection />}
              />
              <Route
                exact
                path="speciality/:id"
                element={<StudentListingSpeciality />}
              />
              <Route exact path="user/:id" element={<UserProfile />} />
              <Route exact path="schedules" element={<AdminSchedules />} />
            </Route>
          )}
          {user.type === "teacher" && (
            <Route path="/teacher" element={<Teacher />}>
              <Route exact path="" element={<TeacherMainHome />}>
                <Route exact path="home" element={<TeacherHome />} />
                <Route
                  exact
                  path="view-schedule"
                  element={<TeacherSchedule />}
                />
              </Route>

              <Route exact path="profile" element={<TeacherProfile />} />
            </Route>
          )}

          {user.type === "ChelfDepartment" && (
            <Route path="/teacher" element={<Teacher />}>
              <Route exact path="chelf" element={<ChelfDepartment />}>
                <Route exact path="dashboard" element={<ChelfDashBoard />} />
                <Route exact path="sessions" element={<ChelfSession />} />
                <Route
                  exact
                  path="justification"
                  element={<ChelfJustification />}
                />
              </Route>
              <Route exact path="" element={<TeacherMainHome />}>
                <Route exact path="home" element={<TeacherHome />} />
                <Route
                  exact
                  path="view-schedule"
                  element={<TeacherSchedule />}
                />
              </Route>
              <Route exact path="profile" element={<TeacherProfile />} />
            </Route>
          )}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
