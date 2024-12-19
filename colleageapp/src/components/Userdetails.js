// import React from 'react'

// export const Userdetails = () => {
//   return (
//     <div>Userdetails</div>
//   )
// }


import React from 'react'
import { useParams } from 'react-router-dom'
export const Userdetails = () => {
    //const params=useParams()
    // const userid=params.userId
    const {userId}=useParams()
  return (
    <>
    <div>Userdettails of {userId} </div>
    </>
  )
}