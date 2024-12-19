// import React from 'react'
// import { Outlet } from 'react-router-dom'
// export const  Users = () => {
//   return (
//     <>
//     <div> <h1> Users List</h1>
//     <h2> User1</h2>
//     <h2> User2</h2>
//     <h2> User3</h2>
//     </div>
//     <Outlet />
// </>
//   )
// }
// import React from 'react'
// import { Outlet } from 'react-router-dom'
// export const  Users = () => {
//   return (
//     <>
//     <div> <h1> Users List</h1>
//     <h2> User1</h2>
//     <h2> User2</h2>
//     <h2> User3</h2>
//     </div>
//     <Outlet />
// </>
//   )
// }
//hook
// import React from 'react'
// import { Outlet ,useSearchParams} from 'react-router-dom'
// export const  Users = () => {
//     const [SearchParams,setSearchParams] =useSearchParams()
//   return (
//     <>
//     <div> <h1> Users List</h1>
//     <h2> User1</h2>
//     <h2> User2</h2>
//     <h2> User3</h2>
//     </div>
//     <Outlet />
//     <div>
//         <button onClick={()=> setSearchParams({filter: 'active'})}>Active users</button>
//         <button onClick={()=> setSearchParams({})}>reset filters</button>
//     </div>
// </>
//   )
// }

import React from 'react'
import { Outlet ,useSearchParams} from 'react-router-dom'
export const  Users = () => {
    const [SearchParams,setSearchParams] =useSearchParams()
  const showActiveusers= SearchParams.get('filter') ==='active'
    return (
    <>
    <div> <h1> Users List</h1>
    <h2> User1</h2>
    <h2> User2</h2>
    <h2> User3</h2>
    </div>
    <Outlet />
    <div>
        <button onClick={()=> setSearchParams({filter: 'active'})}>Active users</button>
        <button onClick={()=> setSearchParams({})}>reset filters</button>
    </div>
    {
        showActiveusers ? (
        <h2> Showing active users</h2>
    ) : ( 
    <h2> Showing all users </h2>)
    }
</>
  )
}