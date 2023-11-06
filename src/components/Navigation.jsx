import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';




const Navigation = () => {
    return (

        <div className='p-1 d-flex justify-content-end ' id='nav_main'>

            <div id='nav_mid' className=' w-75 d-flex justify-content-end align-items-center'>
                <h2>
                    Ekart Store.
                </h2>
            </div>

            <div id='nav_right' className=' d-flex px-4 gap-4 w-50 justify-content-end align-items-center '>

               
                <Link to={"/login"} style={{color: "black"}}>Login</Link>
                <Link to={"/register"} style={{color: "black"}}>Register</Link>
                <Badge badgeContent={4} color="primary">
                <Link to={"/cart"} style={{color: "black"}}>  <ShoppingCartIcon color="action" /></Link>
                  
                </Badge>
            </div>
        </div>
    )
}

export default Navigation;