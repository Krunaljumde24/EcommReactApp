import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useAuthentication() {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const navigate = useNavigate();

    const login = (uName, uPass) => {

        // Login API Call
        axios
            .post(`${API_BASE_URL}/auth/api/login`, {
                username: uName,
                password: uPass
            })
            .then(resp => {
                console.log(resp);
                if (resp.status === 200 && resp.data.token) {
                    toast('Login Successful.', {
                        duration: 3000,
                        position: "top-center",
                        icon: '✅'
                    })
                    let userObj = {
                        username: uName,
                        loginStatus: true,
                        token: resp.data.token
                    }
                    // Set user auth details in localStorage
                    localStorage.setItem('userAuthDetails', JSON.stringify(userObj))

                    // Navigate to other page
                    navigate('/shop')

                } else {
                    toast('Login Failed.', {
                        duration: 3000,
                        icon: '❌',
                        position: "top-right"
                    })
                }
            })
            .catch(error => {
                let errMsg = error.response.data.message;
                toast(errMsg, {
                    duration: 3000,
                    icon: '❌',
                    position: 'top-center'
                })
            })

    }

    const logout = () => {
        localStorage.removeItem('userAuthDetails');
        toast('You have been logged out.', {
            duration: 3000,
            icon: 'ℹ',
            position: 'top-center'
        })
        navigate('/login')
    }


    const checkLoginStatus = async () => {

        // get the auth details from local storage
        let authObj = JSON.parse(localStorage.getItem('userAuthDetails'));
        // validate auth details
        if (authObj && authObj.loginStatus) {

            // Call verifyToken API
            await axios.get(`${API_BASE_URL}/auth/api/verifyToken`, {
                headers: {
                    token: authObj.token
                }
            }).then(resp => {
                console.log(resp);
                if (resp.status === 200 && resp.data.status === "Authorized") {
                }
            }).catch(error => {
                // set error message in case of error
                console.log(error);
                toast('Session has expire, please re-login.', {
                    duration: 5000,
                    icon: '❌',
                    position: 'top-center'
                })
                // remove userAuth object from localStorage
                localStorage.removeItem('userAuthDetails');
                navigate('/login');
            })
        } else {
            toast('Please login.', {
                duration: 3000,
                icon: 'ℹ',
                position: 'top-center'
            })
            navigate('/login')
        }
    }

    return {
        login,
        logout,
        checkLoginStatus
    }
}

export default useAuthentication