import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Profile() {
  const { logedInUser } = useContext(LoginContext);

  let navigate = useNavigate();

  useEffect(() => {
    let token_value = sessionStorage.getItem("token");
    if (token_value) {
      axios
        .get("http://localhost:8080/auth/api/verifyToken", {
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
            navigate("/signin");
          }
        });
    } else {
      toast.error("Please login.");
      navigate("/signin");
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
