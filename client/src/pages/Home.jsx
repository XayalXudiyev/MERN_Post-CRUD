import React from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard'

export default function Home() {

    const { posts } = useSelector(state => state.posts)   //store içindəki postReducer'ın içindəki posts'u alırıq


    // console.log(posts)
    return (
        <div className='flex items-center m-5 flex-wrap '>
            {
                posts?.map((post, index) => (
                    <HomeCard key={index} post={post} />
                ))
            }
        </div>
    )
}
