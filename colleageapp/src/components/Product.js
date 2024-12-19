import React from 'react'

import { Link ,Outlet} from 'react-router-dom'
export const Product = () => {
  return (
  <>
    <div>
        <input type ='search' placeholder='searchproductname' />
<nav>
    <Link to= 'feature'> Feautureproducts</Link>
    <Link to= 'new'> New Products</Link>
</nav>
        </div>
        <Outlet />
       </>
  )
}
