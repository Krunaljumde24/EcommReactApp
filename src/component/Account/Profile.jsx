import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useAuthentication from "../../CustomHooks/useAuthentication";

function Profile() {

  let navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { checkLoginStatus } = useAuthentication()

  const [imgFileData, setImgFileData] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleImageChange = (event) => {
    let imgFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile)
    reader.onloadend = () => {
      setImgFileData(reader.result)
    }
  }
  const handleImageUpload = () => {
    console.log('image uploaded');
    let obj = {
      "email": "guestuser@devspace.com",
      "username": "guestuser",
      "image": imgFileData
    }

    axios
      .post(`${API_BASE_URL}/user/api/upload-profile-pic`, obj)
      .then(resp => {

      })
      .catch(error => {

      })
  }

  return (
    <div>
      {/* <h1>Welcome {logedInUser}</h1> */}
      <h4 className="text-2xl font-bold">

        Welcome, User.
      </h4>
      <hr />
      <div className="mx-10 my-10">
        <input
          type="file"
          className="border mx-2 my-2"
          onChange={(event) => handleImageChange(event)}
        />
        <button className="bg-slate-900 text-white font-semibold px-4 py-1 rounded-lg " onClick={() => handleImageUpload()}>Upload</button>
      </div>
    </div>
  );
}

export default Profile;
