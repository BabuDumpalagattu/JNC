import { NavLink } from 'react-router-dom'
import React from 'react'

export const Navbar = () => {
    const navlinkstyles = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' :'underline'
        }
    }
  return (
    <>
    <nav class ='primarynav'>
    <NavLink style={navlinkstyles} to='/'>Home</NavLink>
    <NavLink style={navlinkstyles} to='/about'>About</NavLink>
    <NavLink style={navlinkstyles} to='/products'>products</NavLink>
    </nav>
    </>
  )
}



// //Fragments 
// import React from 'react'
// import { Link } from 'react-router-dom'
// export const Navbar = () => {
//   return (
//    <>
//    <nav>
//    <Link to ='/'>Home</Link>
//    <Link to ='/about'>About</Link>
//    </nav>
//    </>
    
//   )
// }
