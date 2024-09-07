import React from "react";
import AccountInput from "./AccountInput";
import { useForm } from "react-hook-form";

function AccountSetting() {
  const { handleSubmit, register, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  let secQue = [
    'What is your birth place?', 'What is your pets name?'
  ]


  return (
    <div className="w-full px-24 pt-4">
      <h2 className="text-xl font-bold">Account Setting</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        laudantium atque suscipit accusamus numquam placeat facilis eligendi
        tempore omnis non.
      </p>

      <form className="my-t p-6 bg-zinc-50" onSubmit={handleSubmit(onSubmit)}>
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
                  register={register}
                />

                <AccountInput
                  id="last-name"
                  name="lName"
                  label="Last Name"
                  type="text"
                  register={register}
                />

                <AccountInput
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  register={register}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-6">
              <AccountInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                register={register}
              />

              <AccountInput
                id="phone"
                name="phone"
                label="Phone Number"
                type="text"
                register={register}
              />
            </div>
            <div className="mt-4 grid grid-cols-6">
              <AccountInput
                id="dob"
                name="dob"
                label="Date of Birth"
                type="date"
                register={register}
              />

              <div className="mt-4 col-span-4 sm:col-span-2">
                <label htmlFor="gender" className="block text-xs pb-2">
                  Gender
                </label>
                <input type="radio" id="male" name="gender" />
                <label htmlFor="male" className="p-3 font-medium text-sm">
                  Male
                </label>
                <input type="radio" id="female" name="gender" />
                <label htmlFor="female" className="p-3 font-medium text-sm">
                  Female
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-7 mt-5">
                Change Password
              </h2>
              <div className="mt-4 grid grid-cols-6">
                <AccountInput
                  id="password"
                  name="password"
                  label="New Password"
                  type="password"
                  register={register}
                />

                <AccountInput
                  id="cpassword"
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  register={register}
                />
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
                    className="block w-3/4 rounded-full border-1 px-3 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition duration-300 ease-in-out"
                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>
              <AccountInput id="state" name="state" label="State" type="text" register={register} />
              <AccountInput id="city" name="city" label="City" type="text" register={register} />

              <AccountInput
                id="zipcode"
                name="zipcode"
                label="Zip Code"
                type="text"
                register={register}
              />
            </div>
            <h2 className="mt-4 text-sm font-semibold leading-7">
              Security Questions
            </h2>
            <div className="grid grid-cols-6">
              <div className="col-span-3">
                <label htmlFor="country" className="block mt-2 text-xs">
                  Question 1
                </label>
                <select
                  {...register(`secQue1`)}
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
                  register={register}
                />

              </div>

              <div className="col-span-3">
                <label htmlFor="country" className="block mt-2 text-xs">
                  Question 1
                </label>
                <select
                  {...register(`secQue2`)}
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
                  register={register}
                />

              </div>
            </div>
            <button
              className="w-80 bg-black text-white rounded-full
             my-6 py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form >
    </div >
  );
}

export default AccountSetting;
