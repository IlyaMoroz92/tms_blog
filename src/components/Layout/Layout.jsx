import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Header  } from '../Header';
import { Footer  } from '../Footer';




const Layout = () => {
  return (
      <>
        <Header />
        <div className="container">
            <Outlet/>
            <Footer/>
        </div>
        
      </>
  )
}

export default Layout