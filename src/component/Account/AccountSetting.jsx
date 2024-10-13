import React, { useEffect } from "react";
import AccountInput from "./AccountInput";
import useCustomForm from "../../CustomHooks/useCustomForm"
import axios from "axios";
import useAuthentication from '../../CustomHooks/useAuthentication';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AccountSetting() {

  const { userDetails, handleInputChange, resetForm, setUserDetails } = useCustomForm();

  const navigate = useNavigate();

  const { checkLoginStatus } = useAuthentication();

  const updateAccountDetails = (event) => {
    // Integrate API to update only account basic details
    event.preventDefault();
    console.log(userDetails);

  }

  useEffect(() => {

    if (checkLoginStatus()) {
      axios.post('http://localhost:8080/user/api/get-user-details', {
        "username": "kjumde1",
        "email": "krunaljumde@gmail.com"
      }).then((resp) => {
        console.log(resp.data);
        let data = resp.data;
        setUserDetails(
          {
            ...userDetails,
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            phone: data.phoneNumber,
            dob: data.dateOfBirth,
            gender: data.gender,
            address: data.address,
            country: data.country,
            state: data.state,
            ci
          }
        )

      }).catch((err) => {
        console.log(err);
      })
    } else {
      toast.error('Please login.')
      navigate('/login')
    }


  }, [])


  return (
    <div className="w-full px-24 pt-4">
      <h2 className="text-xl font-bold">Account Setting</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        laudantium atque suscipit accusamus numquam placeat facilis eligendi
        tempore omnis non.
      </p>

      <form className="my-3 p-6 bg-slate-200 shadow-xl">
        <div className="space-y-12">
          <div className="pb-12">
            <div>
              <h2 className="text-sm font-semibold leading-7">
                Profile Information
              </h2>
              <div className="mt-4 grid grid-cols-6">

                <AccountInput
                  id="first-name"
                  name="firstName"
                  label="First Name"
                  type="text"
                  value={userDetails.firstName}
                  handleChange={handleInputChange}
                />


                <AccountInput
                  id="last-name"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  value={userDetails.lastName}
                  handleChange={handleInputChange}
                />

                <AccountInput
                  id="username"
                  name="username"
                  label="Username"
                  disabled={true}
                  type="text"
                  value={userDetails.username}
                  handleChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-6">
              <AccountInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                disabled={true}
                value={userDetails.email}
                handleChange={handleInputChange}
              />

              <AccountInput
                id="phone"
                name="phone"
                label="Phone Number"
                type="text"
                value={userDetails.phone}
                handleChange={handleInputChange}
              />
            </div>
            <div className="mt-4 grid grid-cols-6">
              <AccountInput
                id="dob"
                name="dob"
                label="Date of Birth"
                type="date"
                value={userDetails.dob}
                handleChange={handleInputChange}
              />

              <div className="mt-4 col-span-4 sm:col-span-2">
                <label htmlFor="gender" className="block text-xs pb-2">
                  Gender
                </label>
                <input type="radio" id="male" name="gender" value="male" onChange={(event) => handleInputChange(event)} />
                <label htmlFor="male" className="p-3 font-medium text-sm">
                  Male
                </label>
                <input type="radio" id="female" name="gender" value="female" onChange={(event) => handleInputChange(event)} />
                <label htmlFor="female" className="p-3 font-medium text-sm">
                  Female
                </label>
              </div>
            </div>


            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div className="col-span-6">
                <h2 className="text-sm font-semibold leading-7">
                  Shipping Address
                </h2>
                <textarea
                  id="address"
                  name="address"
                  className="block w-3/5 rounded-lg border-1 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  value={userDetails.address}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-8">
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="country" className="block text-xs">
                  Country
                </label>
                <div className="mt-1">
                  <select
                    name="country"
                    id="country"
                    value={userDetails.country}
                    onChange={(event) => handleInputChange(event)}
                    className="block w-3/4 rounded-full border-1 px-3 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition duration-300 ease-in-out"

                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>
              <AccountInput id="state" name="state" label="State" type="text" value={userDetails.state}
                handleChange={handleInputChange} />
              <AccountInput id="city" name="city" label="City" type="text" value={userDetails.city}
                handleChange={handleInputChange} />

              <AccountInput
                id="zipcode"
                name="zipcode"
                label="Zip Code"
                type="text"
                value={userDetails.zipcode}
                handleChange={handleInputChange}
              />
            </div>
            <button
              className="text-sm bg-black text-white rounded-full
             my-6 py-2 px-4"
              type="submit"
              onClick={(event) => updateAccountDetails(event)}
            >
              Update Account Details
            </button>

            <div className="border border-slate-900 p-2 rounded-md">
              <p className="font-bold text-red-500">*This functionality is currently unavaialble</p>
              <h2 className="text-sm font-semibold leading-7 mt-5">
                Change Password
              </h2>
              <div className="mt-4 grid grid-cols-6">
                <AccountInput
                  id="password"
                  name="password"
                  label="New Password"
                  type="password"
                  value={userDetails.password}
                  handleChange={handleInputChange}
                />

                <AccountInput
                  id="cpassword"
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  value={userDetails.cpassword}
                  handleChange={handleInputChange}
                />
              </div>

              <h2 className="mt-4 text-sm font-semibold leading-7">
                Security Questions
              </h2>
              <div className="grid grid-cols-6">
                <div className="col-span-3">
                  <label htmlFor="secQue1" className="block mt-2 text-xs">
                    Question 1
                  </label>
                  <select
                    id="secQue1"
                    name="secQue1"
                    value={userDetails.secQue1}
                    onChange={(event) => handleInputChange(event)}
                    className="mt-2 w-3/4 rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-900"
                  >
                    <option value="">Choose an option</option>
                    <option value="What is your birth place?">What is your birth place?</option>
                    <option value="What is your pet's name?">What is your pet's name?</option>
                    <option value="What is your favorite place?">What is your favorite place?</option>
                  </select >
                  <AccountInput
                    id="secQue1Ans"
                    name="secQue1Ans"
                    label="Answer 1"
                    type="text"
                    value={userDetails.secQue1Ans}
                    handleChange={handleInputChange}
                  />

                </div>

                <div className="col-span-3">
                  <label htmlFor="secQue2" className="block mt-2 text-xs">
                    Question 1
                  </label>
                  <select
                    id="secQue2"
                    name="secQue2"
                    value={userDetails.secQue2}
                    onChange={(event) => handleInputChange(event)}
                    className="mt-2 w-3/4 rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-900"
                  >
                    <option value="">Choose an option</option>
                    <option value="What is your birth place?">What is your birth place?</option>
                    <option value="What is your pet's name?">What is your pet's name?</option>
                    <option value="What is your favorite place?">What is your favorite place?</option>
                  </select >
                  <AccountInput
                    id="secQue2Ans"
                    name="secQue2Ans"
                    label="Answer 2"
                    type="text"
                    value={userDetails.secQue2Ans}
                    handleChange={handleInputChange}
                  />

                </div>
              </div>

              <button
                className="w-80 bg-black text-white rounded-full
             my-6 py-2"
                type="submit"
                onClick={(event) => { }}
              >
                Update Security Details
              </button>
            </div>

          </div>
        </div>
      </form >
    </div >
  );
}

export default AccountSetting;
