import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navitem from '../Navbar/Navitem';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
    return (
        <>
          <Navbar logo="React Shop">
        <Navitem title="Home" link="/" />
        <Navitem title="Details" link="/product/:id" />
        <Navitem title="Cart" link="/cart" />
      </Navbar>
      <main>
        <Outlet />
      </main>
      <Footer />
      </>
    )
}
