import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginContext } from "../../Context/LoginContext";

function Login() {
  const navigate = useNavigate();
  const { logIn } = useContext(LoginContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.username && data.password) {
      axios
        .post("http://localhost:8080/auth/api/login", {
          username: data.username,
          password: data.password,
        })
        .then((res) => {
          if (res.status === 200) {
            let result = logIn(data.username);
            sessionStorage.setItem("token", res.data.token);
            toast.success("Logged in succesfully");
            navigate("/profile");
          }
        })
        .catch((err) => {
          if (err.response.data.status === 400) toast.error(err.response.data);
          else if (err.response.data.status === 401)
            toast.error(err.response.data);
          else toast.error("Failed to login!");
        });
    } else {
      toast.error("Please enter valid username and password");
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto my-10 items-center flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 border-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/reset"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
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
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have account?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
