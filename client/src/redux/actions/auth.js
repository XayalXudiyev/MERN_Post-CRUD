//  redux/actions/auth.js


import axios from 'axios'
import { toast } from 'react-toastify'

export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/register', authData)
        dispatch({ type: "REGISTER", payload: data })

        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: 'top-right',
            autoClose: 5000
        })

    }
}

export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/login', authData)
        dispatch({ type: "LOGIN", payload: data })

        window.location = '/'
    } catch (error) {
        
        if (error.response.status >= 400 && error.response.status <= 499){
            toast(
                "Invalid credentials",
                {
                    position: 'top-right',
                    autoClose: 5000
                }
            )
        }
        else if (error.response.status === 500){
            toast(
                "Server error",
                {
                    position: 'top-right',
                    autoClose: 5000
                }
            )
        }
        // TODO: add dev mode
        if (process.env.NODE_ENV === 'development'){
            console.log(error.response)
        }
    }
}