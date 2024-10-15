import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useAuthentication from "../../CustomHooks/useAuthentication";

function Profile() {

  let navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { checkLoginStatus } = useAuthentication()

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div>
      {/* <h1>Welcome {logedInUser}</h1> */}
      <h4 className="text-2xl font-bold">

        Welcome, User.
      </h4>
    </div>
  );
}

export default Profile;
