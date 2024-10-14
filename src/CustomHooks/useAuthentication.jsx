import axios from "axios"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useAuthentication() {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const navigate = useNavigate()

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

    const checkLoginStatus = () => {

    }

    return {
        login,
        logout,
        checkLoginStatus
    }
}

export default useAuthentication