import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function ResetPassword() {

    const [isSecQueSet, setIsSecQueSet] = useState(false);

    const [email, setEmail] = useState('')

    const [secQue, setSecQue] = useState({});

    const [secQueAns, setSecQueAns] = useState({ secQueAns1: '', secQueAns2: '' })

    let handleSecAnsInputChange = (event) => {
        event.preventDefault();
    }

    let submitBtnClick = (event) => {
        event.preventDefault();
        console.log(email);
        axios.post('http://localhost:8080/auth/api/checkSecurityQuestions', {
            email: email
        }).then((resp) => {
            setSecQue(resp.data)
            setIsSecQueSet(true);
        }).catch((error) => {
            console.log(error);
            setIsSecQueSet(false);
            toast.error(error.response.data)
        })
    }
    return (
        <div className="bg-gray-100 flex justify-center">

            {isSecQueSet ?
                <>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4 max-w-md w-full">
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
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit" onClick={(event) => submitBtnClick(event)}>
                                Reset Password
                            </button>
                        </form>
                    </div>
                </>
                :
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
            }
        </div>
    )
}

export default ResetPassword