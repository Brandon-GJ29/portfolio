import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';


const NavBar = () => {
  return (
    <div>
      <div className='flex items-center justify-between py-5 font-medium '>
        <div className='flex items-center justify-center px-6 font-medium space-x-2'>
         <Link to='/' ><h1>.gjbrandon</h1></Link>
           <img src={assets.correo} alt="" className="w-4 h-4 object-contain mr-2"  /> 
           <h1 className='text-sm -translate-y-1/10' >contacto@brandongj.com</h1>
           <img src={assets.person} alt="" className="w-5 h-5 object-contain mr-2" />
           <h1 className='text-sm -translate-y-1/10' >+52 5579182407</h1>
        </div>
         <div >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
          </div>

      </div>

    </div>
  )
}

export default NavBar
