import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import axios from "axios";

//pages imported
import Login from "./pages/auth/Login";
import Admin from "./pages/Admin";
import Dashboard from "./miniPages/admin/Dashboard";
import Teachers from "./miniPages/admin/Teachers";
import Profile from "./miniPages/admin/Profile";
import Licence1 from "./miniPages/admin/Licence1";
import Licence2 from "./miniPages/admin/Licence2";
import Licence3 from "./miniPages/admin/Licence3";
import Master1 from "./miniPages/admin/Master1";
import Master2 from "./miniPages/admin/Master2";
import UserProfile from "./miniPages/admin/UserProfile";
import Forgot from "./pages/auth/Forgot";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  const [user, setUser] = useState({});
  //const [data, setData] = useState({});

  // useEffect(() => {
  //   const data = async () => {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/admin/dashboard"
  //     );
  //     if (response.status === 200) {
  //       setData(response.data);
  //     }
  //   };
  //   data();
  // }, []);

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
              <Route exact path="licence1" element={<Licence1 />} />
              <Route exact path="user/:id" element={<UserProfile />} />
              <Route exact path="licence2" element={<Licence2 />} />
              <Route exact path="licence3" element={<Licence3 />} />
              <Route exact path="master1" element={<Master1 />} />
              <Route exact path="master2" element={<Master2 />} />
            </Route>
          )}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
