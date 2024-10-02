import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Profile() {
  const { logedInUser } = useContext(LoginContext);

  let navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    let token_value = sessionStorage.getItem("token");
    if (token_value) {
      axios
        .get(`${API_BASE_URL}/auth/api/verifyToken`, {
          headers: {
            token: token_value,
          },
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.status === "Unauthorized") {
            toast.error("Login session has expired, please re login.");
            sessionStorage.removeItem("token");
            navigate("/login");
          }
        });
    } else {
      toast.error("Please login.");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {/* <h1>Welcome {logedInUser}</h1> */}
      <h4 className="text-2xl font-bold">{logedInUser}</h4>
    </div>
  );
}

export default Profile;
