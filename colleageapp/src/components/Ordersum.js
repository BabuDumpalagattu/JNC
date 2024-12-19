


import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Ordersum = () => {
    const navg =useNavigate()
  return (

    <>
    <div> order placed succesfully</div>
    <button onClick={() => navg(-1)}> back</button>
    </>
  )
}

