
import React from 'react'


export default function Avatar({image}) {
  return (
    <div className="">
        <img
        className='rounded-full'
        alt='avatar'
        src={`${image? image:'/images/placeholder.jpg'}`}
        />
        </div>
  )
}
