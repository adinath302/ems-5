import React, { useContext, useEffect, useState } from "react";
import Login from "./Component/Auth/Login";
import EmployeeDashboard from "./Component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

// import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // },);

  const [user, setuser] = useState(null);
  const Authdata = useContext(AuthContext);
  console.log(Authdata.employees);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setuser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setuser("employees");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
