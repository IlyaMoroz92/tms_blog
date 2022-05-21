import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Header  } from '../Header';




const Layout = () => {
  return (
      <>
        <Header />
        <div>Layout</div>
        <Outlet/>
        <footer>FOOTER</footer>
      </>
      
     
  )
}

export default Layout