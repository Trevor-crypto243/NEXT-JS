import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.jpg'


export default function Navbar() {
  return (
  <nav>
    <Image
    src={logo}
    alt='Trevor Ogina'
    width={70} //pixels
    height={30}
    quality={100}
    // placeholder='blur'
    />

    <h1>Hi, I am Trevor Ogina</h1>
    <Link href={"/"}>Dashboard</Link>
    <Link href={"/tickets"}>Tickets</Link>
  </nav>
  )
}
