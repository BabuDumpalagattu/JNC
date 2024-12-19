import React from 'react'
import { useNavigate } from 'react-router-dom' //hook
export const Home = () => {
    const navg=useNavigate()
  return (
    <>
    <div>
        <button onClick={() => navg('order',{replace : true})}> Order </button>
    </div>
</>
  )
}


// import React from 'react'

// export const Home = () => {
//   return (
//     <div><center><h1>Home page</h1> </center>
//     </div>

//   )
// }