import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
// import { LoginContext } from '../Context/LoginContext'
import axios from "axios";
import toast from "react-hot-toast";

function useAuthentication() {

    const navigate = useNavigate();

    // const { logIn } = useContext(LoginContext);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [loggedInUserDetails, setLoggedInUserDetails] = useState({});
    const [data, setData] = useState({});

    const login = (username, password) => {
        axios
            .post(`${API_BASE_URL}/auth/api/login`, {
                username: username,
                password: password,
            })
            .then((res) => {
                if (res.status === 200) {

                    setLoggedInUserDetails({
                        "username": username,
                        "loginStatus": true,
                        "token": res.data.token
                    })
                    // let result = logIn(username);
                    toast.success("Logged in succesfully");
                    navigate("/shop");
                }
            })
            .catch((err) => {
                if (err.response.data.status === 400) toast.error(err.response.data);
                else if (err.response.data.status === 401)
                    toast.error(err.response.data);
                else toast.error("Failed to login!");
            });
    }

    const logout = () => {
        setData({ test: 'test' })
        console.log(data);

        setLoggedInUserDetails({
            username: undefined,
            loginStatus: false,
            token: undefined
        })

        localStorage.setItem('loggedInUserDetails', loggedInUserDetails);
        toast('You have been Logged out.', {
            duration: 3000,
            position: "top-center",
            icon: 'ℹ️'
        })
        navigate('/login')
    }

    const checkLoginStatus = () => {
        const loginObj = localStorage.getItem('loggedInUserDetails');
        if (loginObj && loginObj != undefined) {
            // console.log(JSON.parse(loginObj))
            return false;
        } else {
            toast('Please login first!!', {
                duration: 3000,
                position: 'top-center',
                icon: '⚠️',
                iconTheme: {
                    primary: '#000',
                    secondary: '#fff',
                },
            });
            navigate('/login')
            return false;
        }
    }
    useEffect(() => {
        localStorage.setItem("loggedInUserDetails", loggedInUserDetails);
        // console.log(JSON.stringify(loggedInUserDetails));
    }, [loggedInUserDetails])
    return {
        login,
        logout,
        checkLoginStatus,
        loggedInUserDetails
    }
}

export default useAuthentication;