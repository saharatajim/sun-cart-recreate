
import Link from 'next/link';
import React from 'react';
import NavLink from "@/components/NavLink"

const Navbar = () => {
 const navItems=[
    {
        path:"/",
        text:"Home"
    },
    {
        path:"/products",
        text:"Products"
    },
    {
        path:"/profile",
        text:"My Profile"
    }
 ]
    return (
        <div className='bg-neutral border-b-3 sticky top-0 z-50 container mx-auto'>
            <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
      {
        navItems.map((item,ind)=>
        <NavLink key={ind} item={item}/>)
      }
      
      </ul>
    </div>
    <a className=" btn btn-ghost text-white font-bold  text-xl">SUN <span className='text-warning'>CART</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu space-x-4 menu-horizontal px-1">
      {
        navItems.map((item,ind)=>
        <NavLink key={ind} item={item}></NavLink>)
      }
    </ul>
  </div>
  <div className="navbar-end space-x-4">
    <Link href={'/signin'} className="btn btn-outline border-warning text-white scale-80 md:scale-100">Sign In</Link>
    <Link href={'/register'}  className="btn btn-warning text-white scale-80 md:scale-100">Register</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;