import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { createPostAction, updatePostAction } from '../redux/actions/post.actions'


const Modal = () => {

    const [postData, setPostData] = useState({ user: '', title: '', description: '' })
    const dispatch = useDispatch()
    const { modal } = useSelector(state => state.modal)

    const onChangeFunc = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }


    const PostCreate = () => {
        if (modal?.updateId) {
            dispatch(updatePostAction(modal?.updateId, postData))
        } else {
            dispatch(createPostAction(postData))
        }
        dispatch({ type: 'MODAL', payload: false })
    }

    return (
        <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center ' >
            <div className='bg-white w-1/3 p-2 rounded-md '>

                <div onClick={() => dispatch({ type: 'MODAL', payload: false })} className=' cursor-pointer flex justify-between items-center' >
                    <h1 className='font-bold text-2xl'>{modal?.updateId ? 'POST UPDATE' : 'POST SHARE'}</h1>
                    <AiOutlineClose size={25} />
                </div>

                <div className='my-4 flex flex-col space-y-3'>
                    <input value={postData.user} className='input-style' type="text" name='user' onChange={onChangeFunc} placeholder='User' />
                    <input value={postData.title} className='input-style' type="text" name='title' onChange={onChangeFunc} placeholder='Title' />
                    <input value={postData.description} className='input-style' type="text" name='description' onChange={onChangeFunc} placeholder='Description' />
                </div>
                <div onClick={PostCreate} className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800'>
                    {modal?.updateId ? ' UPDATE' : ' SHARE'}
                </div>
            </div>
        </div >
    )
}
export default Modal
