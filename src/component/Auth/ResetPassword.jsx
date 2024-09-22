import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {

    const [flag1, setFlag1] = useState(true)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState({ password: '', cpassword: '' });

    const [secQue, setSecQue] = useState({ secQue1: '', secQue1: '' });

    const [secQueAns, setSecQueAns] = useState({ secQueAns1: '', secQueAns2: '' })

    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    const handleSecAnsInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setSecQueAns({ ...secQueAns, [name]: value })
    }

    const submitBtnClick = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/auth/api/checkEmailToResetPassword', {
            email: email
        }).then((resp) => {
            setSecQue(resp.data);
            setFlag1(false)
            setFlag2(true)
        }).catch((error) => {
            toast.error(error.response.data)
        })
    }

    const verify = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/auth/api/checkSecurityAnswers', {
            "email": email,
            "secQue1": secQue.secQue1,
            "secQue2": secQue.secQue2,
            "secQue1Ans": secQueAns.secQueAns1,
            "secQue2Ans": secQueAns.secQueAns2
        }
        ).then(resp => {
            console.log(resp);
            setFlag1(false);
            setFlag2(false);
            setFlag3(true);
        }).catch(error => {
            console.log(error);
            toast.error('Provided answers are incorrect, please try again');
        })
    }

    const updatePassword = (event) => {
        event.preventDefault();
        if (pwd.password && pwd.cpassword && pwd.password === pwd.cpassword) {
            axios.post('http://localhost:8080/auth/api/resetPassword', {
                email: email,
                password: pwd.password
            }).then(resp => {
                toast.success('Password updated. Please re-login.');
                navigate('/login')
            }).catch(error => {
                console.log(error);
                toast.error('Something went wrong, please try again later.')
            })
        } else {
            setErrMsg('*Password and Confirm Password must be same.')
        }
    }


    return (
        <div className="bg-gray-100 flex justify-center">
            {(flag1 && !flag2 && !flag3) ?
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4 max-w-md w-full">
                    <h1 className="text-center text-2xl font-bold mb-6">Forgot Password</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={email}
                                onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit" onClick={(event) => submitBtnClick(event)}>
                            Reset Password
                        </button>
                    </form>
                </div>
                :
                ""
            }

            {(!flag1 && flag2 && !flag3) ?
                < div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4 max-w-md w-full">
                    <h1 className="text-center text-2xl font-bold mb-6">Answer Security Question to reset Password</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="secQue1">
                                Question 1 : {secQue.secQue1}
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="secQueAns1" type="text" name='secQueAns1' value={secQueAns.secQueAns1}
                                onChange={(event) => handleSecAnsInputChange(event)} placeholder="Answer 1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="secQue2">
                                Question 2 : {secQue.secQue2}
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="secQueAns2" type="text" name='secQueAns2' value={secQueAns.secQueAns2}
                                onChange={(event) => handleSecAnsInputChange(event)} placeholder="Answer 2" />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit" onClick={(event) => verify(event)}>
                            Submit
                        </button>
                    </form>
                </div>
                : ""
            }

            {(!flag1 && !flag2 && flag3) ?
                < div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4 max-w-md w-full">
                    <h1 className="text-center text-2xl font-bold mb-6">Create New Password</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                New Password
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="text"
                                name='password'
                                placeholder="Password"
                                value={pwd.newPwd}
                                onChange={(event) => setPwd({ ...pwd, [event.target.name]: event.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="cpassword">
                                Confirm New Password
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={pwd.cNewPwd}
                                onChange={(event) => setPwd({ ...pwd, [event.target.name]: event.target.value })}
                            />
                            <p className='text-red-500 font-semibold text-sm'>{errMsg}</p>

                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit" onClick={(event) => updatePassword(event)}>
                            Submit
                        </button>
                    </form>
                </div>
                :
                ""
            }
        </div >
    )
}

export default ResetPassword