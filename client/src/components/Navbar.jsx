import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()

    const logOutFunc = () => {
        localStorage.removeItem('auth')
        window.location = '/auth'
    }

    // const openModal = () => {
    //     dispatch({ type: 'MODAL', payload: true })
    // }

    return (
        <div className='h-20 bg-indigo-600 flex items-center justify-between px-5 ' >
            <div className='text-white font-bold cursor-pointer text-2xl  '>POST SHARE</div>
            <div className='flex items-center space-x-5'>
                <input type="text" placeholder='search' className='p-2 outline-none rounded-md ' />
                <div onClick={() => { dispatch({ type: 'MODAL', payload: true }) }} className='w-36 border border-indigo-900 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800 '>Post Create</div>
                <BiLogOut onClick={logOutFunc} size={25} className='text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar
