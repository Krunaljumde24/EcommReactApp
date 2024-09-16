import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function SignUp() {
  const {
    register,
    resetField,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    axios
      .post("http://localhost:8080/signup", {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast.success("User sign up successfully");
          navigate("/signIn");
          setSignedUp(true);
          console.log("signup successfully");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.error("Email aready exists.Please use a different email");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 items-center flex min-h-full flex-1 flex-col justify-center pt-2 pb-10 border-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Signup here
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          method="POST"
          className="space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="fName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="fName"
                name="fName"
                type="text"
                required
                className="block w-full rounded-xl border-0 py-0.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("firstName", { required: "Please enter your first name" })}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lName"
                name="lName"
                type="text"
                required
                className="block w-full rounded-xl border-0 py-0.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("lastName", { required: "Please enter your name" })}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-xl border-0 py-0.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                required
                autoComplete="username"
                className="block w-full rounded-xl border-0 py-0.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("username", { required: true })}
              />
            </div>
          </div>

          <div className="flex-row">
            <div className="flex col-6 items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-xl border-0 py-0.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
            </div>

            <div className="mt-2 flex col-6 items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="ConfirmPassword"
                name="ConfirmPassword"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-xl border-0 py-0.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("ConfirmPassword", {
                  required: true,
                  validate: (val) => {
                    const { password } = getValues();
                    return password === val || "*password should match";
                  },
                })}
              />

              <p className="text-red-600">
                {errors.ConfirmPassword && errors.ConfirmPassword.message}
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-6 flex w-full justify-center rounded-xl bg-indigo-600 py-0.5 px-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-2 text-sm text-gray-500">

          <Link to="/signIn" className="">
            <p>
              Already have account?
              <b className="text-indigo-600">
                Sign In
              </b>
            </p>

          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
