import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

function useAuth() {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // const [userAuthDetails, setUserAuthDetails] = useState({})

    const login = (username, password) => {

        axios
            .post(`${API_BASE_URL}/auth/api/login`, {
                username: username,
                password: password
            })
            .then(resp => {
                if (resp.status === 200) {
                    let data = resp.data;
                    toast('Login Successful', {
                        duration: 3000,
                        position: "top-center",
                        icon: '✅'
                    })
                    let auth = JSON.stringify({
                        username: username,
                        loginStatus: true,
                        token: data.token
                    });
                    localStorage.setItem('userAuthDetails', auth)
                    // setUserAuthDetails({
                    // username: username,
                    // loginStatus: true,
                    // token: data.token
                    // })
                } else {
                    toast('Login Failed', {
                        duration: 3000,
                        position: "top-center",
                        icon: '❌'
                    })
                }
            })
            .catch(error => {
                console.log(error);
                toast('Login Failed', {
                    duration: 3000,
                    position: "top-center",
                    icon: '❌'
                })
            })
    }

    const logout = () => {
        localStorage.removeItem('userAuthDetails');
    }

    const checkLoginStatus = () => {
        let authObj = JSON.parse(localStorage.getItem('userAuthDetails'));
        if (authObj && Object.keys(authObj).length > 0 && authObj.loginStatus) {
            toast(
                <ul className="list-disc mx-10">
                    <li>Username : {authObj.username}</li>
                    <li>Token : {authObj.token}</li>
                </ul>
                , {
                    duration: 3000,
                    position: "top-center",
                    icon: 'ℹ'
                })
            return true;
        } else {
            toast('User is NOT logged in.', {
                duration: 3000,
                position: "top-center",
                icon: '⚠'
            })
            return false;
        }
    }
    useEffect(() => {

    }, [])

    return {
        login,
        logout,
        checkLoginStatus
    }
}

export default useAuth