"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({item}) => {
    const path =usePathname()
    
    const isActive=path==item.path
    return (
      <Link
      className={`${isActive && 'border-b-2 border-b-warning '} text-white`}
      href={item.path}>{item.text}</Link>
    );
};

export default NavLink;