import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction, registerAction } from '../redux/actions/auth.js'

export default function Auth() {

    const [signUp, setSignup] = useState(true)

    const [authData, setAuthData] = useState({ username: "", email: "", password: "" })

    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()

    const authFunc = () => {
        if (signUp) {
            dispatch(registerAction(authData))
        } else {
            dispatch(loginAction(authData))
        }
    }

    return (
        <div className='w-full h-screen bg-gray-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-50'>
            <div className='w-1/3 bg-white p-3 text-center'>
                <h1 className='text-2xl text-black font-bold'>
                    {
                        signUp ? "REGISTER " : "LOGIN"
                    }
                </h1>
                <div className='flex flex-col space-y-3 my-5 '>
                    {signUp && <input type="text" placeholder='username' className='input-style' value={authData.username} name='username' onChange={onChangeFunc} />}
                    <input type="email" placeholder='email' className='input-style' value={authData.email} name='email' onChange={onChangeFunc} />
                    <input type="text" placeholder='password' className='input-style' value={authData.password} name='password' onChange={onChangeFunc} />
                </div>

                <div className='text-red-500 text-xs cursor-pointer mb-4 text-left'>
                    {
                        signUp ? <span onClick={() => setSignup(false)}>Have an account?</span> : <span onClick={() => setSignup(true)}>Don't have an account?  </span>
                    }
                </div>

                <div onClick={authFunc} className='w-full p-2 text-center bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-800 text-white' onChange={() => { setSignup(false) }}>
                    {
                        signUp ? "Sign Up" : "Sign In"
                    }
                </div>
            </div>
        </div>
    )
}
