import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserPrivateComponent = () => {
  return (
    <>
      {localStorage.getItem("snapdeal-user") ? <Navigate to="/" /> : <Outlet />}
    </>
  );
};

export default UserPrivateComponent;
