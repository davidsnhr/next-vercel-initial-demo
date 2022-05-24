import Link from 'next/link'
import React from 'react'
import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'
const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  return (
    
    <nav className={styles['menu-container']}>
      {menuItems.map((menu, idx) => (
        <ActiveLink key={idx} href={menu.href} text={menu.text}/>
        
      ))}
    </nav>
  )
}

export default Navbar