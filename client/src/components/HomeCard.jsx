import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deletePostAction, updatePostAction } from '../redux/actions/post.actions'

const HomeCard = ({ post }) => {


    const dispatch = useDispatch()

    const deletePost = (id) => {
        dispatch(deletePostAction(id))
    }

    const updatePost = (id) => {
        dispatch({type : 'MODAL', payload : {open : true, updateId : id}})
    }


    return (
        <div className='relative w-1/5 border p-3 rounded-md bg-gray-50 m-5 '>
            <h1>HomeCard</h1>
            <div className='font-bold text-xl uppercase'>     {post?.title} </div>
            <div className='text-gray-700 text-sm'> {post?.description} </div>

            <div className='flex items-center justify-between mt-3'>
                <span className='text-xs text-gray-500'>{post?.user}</span>
                <span className='text-xs text-gray-500'>{(post?.date)?.substring(0, 10)}</span>
            </div>

            <div className='absolute -top-3 -right-3 flex items-center space-x-3'>
                <AiOutlineEdit  onClick={() => updatePost(post._id)} size={22} className='bg-red-500 cursor-pointer rounded-full text-white p-1' />
                <AiOutlineDelete onClick={() => deletePost(post._id)} size={22} className='bg-red-500 cursor-pointer rounded-full text-white p-1' />
            </div>
            <div></div>
        </div>
    )
}

export default HomeCard
